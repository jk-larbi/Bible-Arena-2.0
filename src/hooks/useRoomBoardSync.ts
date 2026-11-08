import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { fetchRoomBoard, subscribeToRoomBoard, type RoomBoardSnapshot } from '../lib/rooms';
import { useSession } from '../lib/auth';

export function useRoomBoardSync(roomId: string | undefined) {
  const { user } = useSession();
  const [board, setBoard] = useState<RoomBoardSnapshot | null>(null);
  const [myPrivateState, setMyPrivateState] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(Boolean(roomId));
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!roomId) return;
    try {
      const snapshot = await fetchRoomBoard(roomId);
      let privateState: Record<string, unknown> = {};
      if (user?.id) {
        const { data, error: privateError } = await supabase
          .from('room_board_player_state')
          .select('private_state')
          .eq('room_id', roomId)
          .eq('user_id', user.id)
          .maybeSingle();
        if (privateError) throw new Error(privateError.message);
        privateState = (data?.private_state as Record<string, unknown>) || {};
      }
      setBoard(snapshot);
      setMyPrivateState(privateState);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not sync the game board.');
    } finally {
      setLoading(false);
    }
  }, [roomId, user?.id]);

  useEffect(() => {
    if (!roomId) return;
    let active = true;
    const run = async () => { if (active) await refresh(); };
    void run();
    const unsubscribe = subscribeToRoomBoard(roomId, () => { void run(); });
    const onVisible = () => { if (document.visibilityState === 'visible') void run(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      active = false;
      unsubscribe();
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [roomId, refresh]);

  const currentPlayerId = board?.player_order?.[Math.max(0, (board.current_turn_index || 1) - 1)] || null;
  return {
    board,
    myPrivateState,
    loading,
    error,
    isMyTurn: Boolean(user?.id && currentPlayerId === user.id),
    currentPlayerId,
    refresh,
  };
}

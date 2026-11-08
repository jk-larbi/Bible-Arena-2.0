import { useEffect, useRef, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { subscribeToRoom } from '../lib/rooms';
import { useSession } from '../lib/auth';

export interface SyncRoom {
  id: string;
  code: string;
  host_id: string;
  game_slug: string;
  status: 'waiting' | 'playing' | 'finished';
  current_question_index: number;
  question_started_at: string | null;
  question_duration_seconds: number;
  reveal_seconds: number;
  question_ids: string[];
}

export interface SyncPlayer {
  id: string;
  room_id: string;
  user_id: string;
  display_name: string;
  is_ready: boolean;
  is_host: boolean;
  score: number;
}

export type MultiplayerPhase = 'idle' | 'answering' | 'reveal' | 'advancing';

export interface UseMultiplayerSyncOptions {
  pollIntervalMs?: number;
  enabled?: boolean;
  onPhaseChange?: (phase: MultiplayerPhase) => void;
}

export interface UseMultiplayerSyncResult {
  room: SyncRoom | null;
  players: SyncPlayer[];
  phase: MultiplayerPhase;
  secondsLeft: number;
  progress: number;
  serverOffsetMs: number;
  loading: boolean;
  error: string | null;
  isHost: boolean;
  currentPlayer: SyncPlayer | undefined;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to poll and synchronize Supabase room RPC endpoints,
 * maintaining atomic clock synchronization, game status, and live player rankings.
 */
export function useMultiplayerSync(
  roomId: string | undefined,
  options: UseMultiplayerSyncOptions = {}
): UseMultiplayerSyncResult {
  const { pollIntervalMs = 1000, enabled = true, onPhaseChange } = options;
  const { user, loading: authLoading } = useSession();

  const [room, setRoom] = useState<SyncRoom | null>(null);
  const [players, setPlayers] = useState<SyncPlayer[]>([]);
  const [serverOffsetMs, setServerOffsetMs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // High-resolution clock tick
  const [, setTick] = useState(0);
  const prevPhaseRef = useRef<MultiplayerPhase>('idle');
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isFetchingRef = useRef(false);

  // Fast polling & RPC synchronization function
  const fetchSyncData = useCallback(async () => {
    if (!roomId || !enabled || authLoading || isFetchingRef.current) return;
    isFetchingRef.current = true;

    const t0 = Date.now();
    try {
      // 1. Try unified get_room_sync RPC endpoint
      const { data, error: rpcError } = await supabase.rpc('get_room_sync', { p_room: roomId });
      const t1 = Date.now();

      if (!rpcError && data && data.room) {
        const rawRoom = data.room;
        const formattedRoom: SyncRoom = {
          id: rawRoom.id,
          code: rawRoom.room_code || rawRoom.code,
          host_id: rawRoom.host_id,
          game_slug: rawRoom.game_id || rawRoom.game_slug || 'scripture-challenge',
          status: rawRoom.status,
          current_question_index: rawRoom.current_question_index ?? 0,
          question_started_at: rawRoom.question_started_at ?? null,
          question_duration_seconds: rawRoom.question_duration_seconds ?? 20,
          reveal_seconds: rawRoom.reveal_seconds ?? 5,
          question_ids: rawRoom.question_ids ?? [],
        };

        setRoom(formattedRoom);

        // Calculate network roundtrip and server clock offset
        if (data.server_time) {
          const serverTimeMs = Date.parse(data.server_time as string);
          if (!isNaN(serverTimeMs)) {
            setServerOffsetMs(serverTimeMs - (t0 + t1) / 2);
          }
        }

        const rawPlayers = (data.players as SyncPlayer[]) || [];
        setPlayers(rawPlayers.sort((a, b) => (b.score || 0) - (a.score || 0)));
        setError(null);
        setLoading(false);
        isFetchingRef.current = false;
        return;
      }
    } catch {
      // Fallback to table queries below
    }

    // 2. Direct table fallback if RPC is unmigrated or encountering errors
    try {
      const [roomRes, playersRes] = await Promise.all([
        supabase.from('rooms').select('*').eq('id', roomId).single(),
        supabase.from('room_players').select('*').eq('room_id', roomId).order('score', { ascending: false }),
      ]);

      let serverTimeStr: string | null = null;
      try {
        const timeRes = await supabase.rpc('server_now');
        if (timeRes?.data) serverTimeStr = timeRes.data as string;
      } catch {
        // Non-blocking
      }

      const t1 = Date.now();

      if (roomRes.error) throw new Error(roomRes.error.message);
      if (roomRes.data) {
        const r = roomRes.data;
        const formatted: SyncRoom = {
          id: r.id,
          code: r.room_code || r.code,
          host_id: r.host_id,
          game_slug: r.game_id || r.game_slug || 'scripture-challenge',
          status: r.status,
          current_question_index: r.current_question_index ?? 0,
          question_started_at: r.question_started_at ?? null,
          question_duration_seconds: r.question_duration_seconds ?? 20,
          reveal_seconds: r.reveal_seconds ?? 5,
          question_ids: r.question_ids ?? [],
        };
        setRoom(formatted);
      }

      if (serverTimeStr) {
        const sTime = Date.parse(serverTimeStr);
        if (!isNaN(sTime)) {
          setServerOffsetMs(sTime - (t0 + t1) / 2);
        }
      }

      if (playersRes.data) {
        setPlayers((playersRes.data as SyncPlayer[]).sort((a, b) => (b.score || 0) - (a.score || 0)));
      }
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  }, [roomId, enabled, authLoading]);

  // High-frequency clock tick (every 150ms) to ensure smooth countdown without lag
  useEffect(() => {
    if (!enabled) return;
    const interval = setInterval(() => {
      setTick((n) => (n + 1) % 1000000);
    }, 150);
    return () => clearInterval(interval);
  }, [enabled]);

  // Main polling loop and visibility change management
  useEffect(() => {
    if (!roomId || !enabled || authLoading) return;

    fetchSyncData();

    // Subscribe to realtime changes for instant push reactions
    const unsubscribe = subscribeToRoom(roomId, () => {
      fetchSyncData();
    });

    // Active polling interval
    const runPoll = () => {
      if (document.visibilityState === 'visible') {
        fetchSyncData();
      }
      pollTimerRef.current = setTimeout(runPoll, pollIntervalMs);
    };

    pollTimerRef.current = setTimeout(runPoll, pollIntervalMs);

    // Re-sync immediately on window focus or visibility change (e.g. waking up phone)
    const onVisibilityOrFocus = () => {
      if (document.visibilityState === 'visible') {
        fetchSyncData();
      }
    };

    window.addEventListener('focus', onVisibilityOrFocus);
    document.addEventListener('visibilitychange', onVisibilityOrFocus);

    return () => {
      unsubscribe();
      if (pollTimerRef.current) {
        clearTimeout(pollTimerRef.current);
        pollTimerRef.current = null;
      }
      window.removeEventListener('focus', onVisibilityOrFocus);
      document.removeEventListener('visibilitychange', onVisibilityOrFocus);
    };
  }, [roomId, enabled, authLoading, pollIntervalMs, fetchSyncData]);

  // Compute live synchronized phase, remaining seconds, and progress
  let phase: MultiplayerPhase = 'idle';
  let secondsLeft = 0;
  let progress = 0;

  if (room && room.status === 'playing' && room.question_started_at) {
    const serverTimestamp = Date.now() + serverOffsetMs;
    const startedMs = Date.parse(room.question_started_at);
    const elapsedSeconds = Math.max(0, (serverTimestamp - startedMs) / 1000);
    const duration = room.question_duration_seconds || 20;
    const reveal = room.reveal_seconds || 5;

    if (elapsedSeconds < duration) {
      phase = 'answering';
      secondsLeft = Math.ceil(duration - elapsedSeconds);
      progress = Math.max(0, Math.min(1, (duration - elapsedSeconds) / duration));
    } else if (elapsedSeconds < duration + reveal) {
      phase = 'reveal';
      secondsLeft = Math.ceil(duration + reveal - elapsedSeconds);
      progress = Math.max(0, Math.min(1, (duration + reveal - elapsedSeconds) / reveal));
    } else {
      phase = 'advancing';
      secondsLeft = 0;
      progress = 0;
    }
  }

  // Notify on phase change if callback provided
  useEffect(() => {
    if (phase !== prevPhaseRef.current) {
      prevPhaseRef.current = phase;
      onPhaseChange?.(phase);
    }
  }, [phase, onPhaseChange]);

  const currentPlayer = players.find((p) => p.user_id === user?.id);
  const isHost = Boolean(room && user && (room.host_id === user.id || currentPlayer?.is_host));

  return {
    room,
    players,
    phase,
    secondsLeft,
    progress,
    serverOffsetMs,
    loading,
    error,
    isHost,
    currentPlayer,
    refetch: fetchSyncData,
  };
}

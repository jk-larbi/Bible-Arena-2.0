import { useEffect, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';

export type RoomState = {
  id: string; status: 'waiting' | 'playing' | 'finished';
  current_question_index: number; question_started_at: string | null;
  question_duration_seconds: number; reveal_seconds: number;
};

/** Offset between this device's clock and the server's clock (ms) */
export function useServerOffset() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let alive = true;
    const sync = async () => {
      try {
        const t0 = Date.now();
        const { data } = await supabase.rpc('server_now');
        const t1 = Date.now();
        if (alive && data) setOffset(Date.parse(data as string) - (t0 + t1) / 2);
      } catch {
        // Fallback to local clock if server_now is unreachable
      }
    };
    sync();
    const onVisible = () => document.visibilityState === 'visible' && sync();
    document.addEventListener('visibilitychange', onVisible);   // re-sync after a phone wakes up
    return () => { alive = false; document.removeEventListener('visibilitychange', onVisible); };
  }, []);
  return offset;
}

export function useRoomPhase(room: RoomState | null, offsetMs: number) {
  const [, tick] = useState(0);
  useEffect(() => { const id = setInterval(() => tick((n) => n + 1), 200); return () => clearInterval(id); }, []);

  if (!room || room.status !== 'playing' || !room.question_started_at)
    return { phase: 'idle' as const, secondsLeft: 0, progress: 0 };

  const elapsed = (Date.now() + offsetMs - Date.parse(room.question_started_at)) / 1000;
  const q = room.question_duration_seconds || 20;
  const rv = room.reveal_seconds || 5;
  if (elapsed < q)       return { phase: 'answering' as const, secondsLeft: Math.ceil(q - elapsed), progress: (q - elapsed) / q };
  if (elapsed < q + rv)  return { phase: 'reveal' as const,    secondsLeft: Math.ceil(q + rv - elapsed), progress: (q + rv - elapsed) / rv };
  return { phase: 'advancing' as const, secondsLeft: 0, progress: 0 };
}

/** Every device asks the server to advance once time is up. The server ignores duplicates. */
export function useAutoAdvance(room: RoomState | null, phase: string) {
  const asked = useRef('');
  useEffect(() => {
    if (!room || phase !== 'advancing') return;
    const key = `${room.id}:${room.current_question_index}`;
    const fire = async () => {
      try {
        const { data } = await supabase.rpc('advance_question', { p_room: room.id, p_from_index: room.current_question_index });
        if (data && (data as RoomState).current_question_index === room.current_question_index && (data as RoomState).status === 'playing')
          setTimeout(fire, 500);
      } catch {
        setTimeout(fire, 500);
      }
    };
    if (asked.current === key) return;
    asked.current = key;
    setTimeout(fire, Math.random() * 300);   // small random delay so 30 phones don't all hit at once
  }, [room, phase]);
}

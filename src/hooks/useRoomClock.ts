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

/** Every device asks the server to advance once time is up. The server serializes
 * duplicate requests and records final multiplayer marks in one transaction. */
export function useAutoAdvance(room: RoomState | null, phase: string) {
  const asked = useRef('');
  const roomId = room?.id;
  const questionIndex = room?.current_question_index;
  useEffect(() => {
    if (!roomId || questionIndex === undefined || phase !== 'advancing') return;
    const key = `${roomId}:${questionIndex}`;
    if (asked.current === key) return;
    asked.current = key;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = (delay: number) => {
      if (!cancelled) timer = setTimeout(fire, delay);
    };
    const fire = async () => {
      if (cancelled) return;
      try {
        const { data, error } = await supabase.rpc('advance_room_question', {
          p_room: roomId,
          p_from_index: questionIndex,
        });
        if (error) throw error;
        const updated = data as RoomState | null;
        // The round may not have elapsed on the server yet. Retry without
        // resetting the timer or issuing duplicate transitions.
        if (updated?.status === 'playing' && updated.current_question_index === questionIndex) {
          schedule(500);
        }
      } catch {
        schedule(1000);
      }
    };

    schedule(Math.random() * 300);
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [roomId, questionIndex, phase]);
}

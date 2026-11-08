import { supabase } from './supabase';

export type Room = {
  id: string;
  code: string;
  host_id: string;
  game_slug: string;
  status: 'waiting' | 'playing' | 'finished';
  settings?: Record<string, unknown>;
};

// Room codes avoid look-alike characters (no I, O, 0, 1)
export const normalizeCode = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, '');
export const isValidCode = (c: string) => /^[ABCDEFGHJKLMNPQRSTUVWXYZ2-9]{6}$/.test(c);
export const inviteLink = (code: string) => {
  const origin = typeof window !== 'undefined' && window.location?.origin
    ? window.location.origin
    : 'https://biblearena.app';
  const basePath = import.meta.env?.BASE_URL || '/';
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return `${origin}${normalizedBase}join/${code}`;
};

export async function createRoom(gameSlug: string, displayName: string, settings = {}) {
  const name = displayName.trim() || 'Player';
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    const { error: authErr } = await supabase.auth.signInAnonymously({ options: { data: { full_name: name } } });
    if (authErr) throw new Error(authErr.message);
  }
  const { data, error } = await supabase.rpc('create_room', {
    p_game_slug: gameSlug,
    p_display_name: name,
    p_settings: settings,
  });
  if (error) throw new Error(error.message);
  return data as Room;
}

// Works for logged-in players AND guests (guests only need a display name)
export async function joinWithCode(rawCode: string, displayName: string) {
  const code = normalizeCode(rawCode);
  if (!isValidCode(code)) throw new Error('A room PIN has 6 letters or numbers.');
  const name = displayName.trim();
  if (name.length < 2) throw new Error('Enter a display name.');

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    const { error } = await supabase.auth.signInAnonymously({ options: { data: { full_name: name } } });
    if (error) throw new Error(error.message);
  }
  const { data, error } = await supabase.rpc('join_room', { p_code: code, p_display_name: name });
  if (error) throw new Error(error.message);
  return data as Room;
}

export async function leaveRoom(roomId: string) {
  const { error } = await supabase.rpc('leave_room', { p_room: roomId });
  if (error) {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user?.id) {
      await supabase.from('room_players').delete().eq('room_id', roomId).eq('user_id', session.user.id);
    }
  }
}

export async function kickPlayerFromRoom(roomId: string, playerId: string) {
  const { error } = await supabase.from('room_players').delete().eq('room_id', roomId).eq('id', playerId);
  if (error) throw new Error(error.message);
}

export async function closeRoom(roomId: string) {
  const { error } = await supabase.from('rooms').update({ status: 'finished' }).eq('id', roomId);
  if (error) throw new Error(error.message);
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const t = document.createElement('textarea');
    t.value = text;
    t.style.position = 'fixed';
    t.style.opacity = '0';
    document.body.appendChild(t);
    t.select();
    document.execCommand('copy');
    t.remove();
  }
}

export async function shareRoom(code: string): Promise<'shared' | 'copied' | 'cancelled'> {
  const url = inviteLink(code);
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'BibleArena Multiplayer',
        text: `Join my live BibleArena game! Room PIN: ${code}`,
        url
      });
      return 'shared';
    } catch (e) {
      if ((e as DOMException).name === 'AbortError') return 'cancelled';
    }
  }
  await copyText(url);
  return 'copied';
}

// Live updates for the waiting room (players joining, ready status, game start, scores)
export function subscribeToRoom(roomId: string, onChange: () => void) {
  const ch = supabase.channel(`room:${roomId}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'room_players', filter: `room_id=eq.${roomId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'rooms', filter: `id=eq.${roomId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'room_answers', filter: `room_id=eq.${roomId}` }, onChange)
    .subscribe();
  return () => { supabase.removeChannel(ch); };
}

export interface RoomAnswerResult {
  is_correct: boolean;
  correct_answer: string;
  explanation: string;
  reference: string;
  marks_awarded: number;
  current_score: number;
}

export interface RoomAnswerResult {
  is_correct: boolean;
  correct_answer: string;
  explanation: string;
  reference: string;
  marks_awarded: number;
  current_score: number;
}

/**
 * Room answers must be graded and recorded by the database.
 * Never fall back to client-side grading: it can create divergent scores
 * between devices and bypass the room's one-answer-per-player constraint.
 */
export async function submitRoomAnswer(
  roomId: string,
  questionId: string,
  answer: string,
  durationMs: number = 0,
  _clientQuestion?: { correct_answer: string; explanation: string; reference: string },
  _playerId?: string
): Promise<RoomAnswerResult> {
  const { data, error } = await supabase.rpc('submit_room_answer', {
    p_room: roomId,
    p_question_id: questionId,
    p_answer: answer.trim(),
    p_duration_ms: Math.max(0, Math.floor(durationMs)),
  });

  if (error) throw new Error(error.message);
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) throw new Error('The server did not confirm your answer.');

  return {
    is_correct: Boolean(row.is_correct),
    correct_answer: row.correct_answer || '',
    explanation: row.explanation || '',
    reference: row.reference || '',
    marks_awarded: Number(row.marks_awarded) || 0,
    current_score: Number(row.current_score) || 0,
  };
}

export async function advanceRoomQuestion(roomId: string, fromIndex: number): Promise<void> {
  const { error } = await supabase.rpc('advance_room_question', {
    p_room: roomId,
    p_from_index: fromIndex,
  });
  if (error) throw new Error(error.message);
}

export async function finishRoomSession(roomId: string): Promise<void> {
  const { error } = await supabase.rpc('finish_room_session', { p_room: roomId });
  if (error) throw new Error(error.message);
}

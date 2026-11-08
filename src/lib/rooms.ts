import { supabase, isBackendConfigured } from './supabase';

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
// Build the invite from the active host and Vite base path. This keeps QR
// joins on the same domain when players use Cloudflare Pages or GitHub Pages.
export const inviteLink = (code: string) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://example.invalid';
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return `${origin}${normalizedBase}join/${normalizeCode(code)}`;
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
  if (error) throw new Error(error.message);
}

export async function kickPlayerFromRoom(roomId: string, playerId: string) {
  const { error } = await supabase.rpc('kick_room_player', { p_room: roomId, p_player: playerId });
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

// Deterministic in-memory helpers are used only by the isolated unit-test suite.
const localRoomSubmissions: Record<string, Set<string>> = {};
const localRoomScores: Record<string, number> = {};

export function simulateRoomAnswer(
  roomId: string,
  questionId: string,
  answer: string,
  clientQuestion: { correct_answer: string; explanation: string; reference: string },
  playerId: string
): RoomAnswerResult {
  const subKey = `${roomId}:${playerId}:${questionId}`;
  if (!localRoomSubmissions[roomId]) localRoomSubmissions[roomId] = new Set();
  if (localRoomSubmissions[roomId].has(subKey)) throw new Error('Answer already submitted for this challenge');
  localRoomSubmissions[roomId].add(subKey);
  const expected = clientQuestion.correct_answer.trim();
  const isCorrect = expected.length > 0 && answer.trim().toLowerCase() === expected.toLowerCase();
  const marks = isCorrect ? 10 : 0;
  const scoreKey = `${roomId}:${playerId}`;
  localRoomScores[scoreKey] = (localRoomScores[scoreKey] || 0) + marks;
  return {
    is_correct: isCorrect,
    correct_answer: expected,
    explanation: clientQuestion.explanation || '',
    reference: clientQuestion.reference || '',
    marks_awarded: marks,
    current_score: localRoomScores[scoreKey],
  };
}

export function simulateRoomAdvance(_roomId: string, _fromIndex: number): void {}
export function simulateRoomFinish(_roomId: string): void {}

export async function submitRoomAnswer(
  roomId: string,
  questionId: string,
  answer: string,
  durationMs: number = 0,
  _clientQuestion?: { correct_answer: string; explanation: string; reference: string }
): Promise<RoomAnswerResult> {
  if (!isBackendConfigured) throw new Error('Live multiplayer requires the connected Supabase backend.');
  const { data, error } = await supabase.rpc('submit_room_answer', {
    p_room: roomId,
    p_question_id: questionId,
    p_answer: answer.trim(),
    p_duration_ms: durationMs,
  });
  if (error) throw new Error(error.message);
  if (!data?.[0]) throw new Error('The server did not confirm your answer.');
  const row = data[0];
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
  if (!isBackendConfigured) throw new Error('Live multiplayer requires the connected Supabase backend.');
  const { error } = await supabase.rpc('advance_room_question', {
    p_room: roomId,
    p_from_index: fromIndex,
  });
  if (error) throw new Error(error.message);
}

export async function finishRoomSession(roomId: string): Promise<void> {
  if (!isBackendConfigured) throw new Error('Live multiplayer requires the connected Supabase backend.');
  const { error } = await supabase.rpc('finish_room_session', { p_room: roomId });
  if (error) throw new Error(error.message);
}

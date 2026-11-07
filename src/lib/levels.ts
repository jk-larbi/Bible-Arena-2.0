import { supabase } from './supabase';

export const CHALLENGES_PER_LEVEL = 10;
export type Stars = 0 | 1 | 2 | 3 | 4 | 5;

/** Preview only. The server calculates the real stars in finish_level. */
export const starsForPercent = (p: number): Stars =>
  p >= 90 ? 5 : p >= 75 ? 4 : p >= 60 ? 3 : p >= 40 ? 2 : p > 0 ? 1 : 0;

const MESSAGES = [
  "Don't be discouraged. Every great Bible student started somewhere.",
  'A good start. Keep reading and keep playing.',
  'Good effort! Keep improving your Bible knowledge.',
  "Well done! You're growing in the Word.",
  'Great work! Almost perfect.',
  'Outstanding! You mastered this level.',
];
export const encouragement = (s: Stars) => MESSAGES[s];

export type LevelNode = {
  level: number; name: string; difficulty: string; challenge_count: number; is_published: boolean;
  unlocked: boolean; completed: boolean; best_stars: number; best_percent: number;
  challenges_done: number; attempts: number;
};

export type LevelResult = {
  result_percent: number; result_stars: Stars; result_points: number; total_ms: number;
  fully_correct: number; prev_best_stars: number; new_best_stars: number;
  is_new_best: boolean; first_completion: boolean; completed_levels: number;
};

export async function getLevelMap(game: string) {
  const { data, error } = await supabase.rpc('get_level_map', { p_game: game });
  if (error) throw new Error(error.message);
  return (data ?? []) as LevelNode[];
}

export async function startLevel(game: string, level: number, restart = false) {
  const { data, error } = await supabase.rpc('start_level', { p_game: game, p_level: level, p_restart: restart });
  if (error || !data?.[0]) throw new Error(error?.message ?? 'Could not start this level.');
  return { attemptId: data[0].attempt_id as string, startIndex: data[0].challenges_done as number };
}

/** index is 1..10. score is 0..1 (1 = fully correct; puzzles can give partial credit). */
export async function recordChallenge(attemptId: string, index: number, score: number, hints = 0, ms?: number) {
  const clean = Math.round(Math.min(1, Math.max(0, score)) * 1000) / 1000;
  const { error } = await supabase.rpc('record_challenge', {
    p_attempt: attemptId, p_index: index, p_score: clean, p_hints: hints, p_ms: ms ?? null,
  });
  if (error) throw new Error(error.message);
}

export async function finishLevel(attemptId: string) {
  const { data, error } = await supabase.rpc('finish_level', { p_attempt: attemptId });
  if (error || !data?.[0]) throw new Error(error?.message ?? 'Could not save your result.');
  return data[0] as LevelResult;
}

export async function getLevelChallenges(gameSlug: string, level: number) {
  const { data, error } = await supabase
    .from('game_content_public')
    .select('id, challenge_index, question_text, options, explanation, reference, metadata')
    .eq('game_slug', gameSlug)
    .eq('level', level)
    .order('challenge_index');
  
  if (error) throw new Error(error.message);
  return data ?? [];
}

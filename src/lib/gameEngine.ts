import { supabase } from './supabase';

export interface LevelSpec {
  game_id: string;
  level: number;
  tier: number;
  time_limit_seconds: number;
  item_count: number;
  pass_threshold_pct: number;
}

/**
 * Shared Scoring Engine
 * Per-game multipliers can be added here.
 */
export async function calculateGameScore(
  gameId: string,
  isCorrect: boolean,
  secondsRemaining: number,
  streak: number
): Promise<number> {
  if (!isCorrect) return 0;
  
  const { data, error } = await supabase.rpc('calculate_score', {
    p_game_id: gameId,
    p_is_correct: true,
    p_seconds_remaining: secondsRemaining
  });
  
  if (error) return 0;
  
  // Add streak bonus locally based on server-verified score
  const streakBonus = Math.min(streak * 20, 100);
  return (data || 0) + streakBonus;
}

/**
 * Server-Authoritative Round Start
 */
export async function startRound(gameId: string, level: number): Promise<string> {
  const { data, error } = await supabase.rpc('start_round', {
    p_game_id: gameId,
    p_level: level
  });
  if (error) throw error;
  return data as string; // round_id
}

/**
 * Server-Authoritative Round Completion
 */
export async function completeRound(
  roundId: string, 
  score: number, 
  timeTakenMs: number
): Promise<void> {
  const { error } = await supabase.rpc('complete_round', {
    p_round_id: roundId,
    p_score: score,
    p_time_taken: timeTakenMs
  });
  if (error) throw error;
}

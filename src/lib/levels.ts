import { supabase, isBackendConfigured } from './supabase';
import {
  buildLocalChallengesForLevel,
  getDifficultyForLevel,
  getStageTitleForLevel,
  type ChallengeItem,
} from '../data/bibleContentBank';

export const CHALLENGES_PER_LEVEL = 10;
export const DEFAULT_TOTAL_LEVELS = 50;
export type Stars = 0 | 1 | 2 | 3 | 4 | 5;

/** Preview & local fallback calculation matching the server stars_for_percent function. */
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
  level: number;
  name: string;
  difficulty: string;
  challenge_count: number;
  is_published: boolean;
  unlocked: boolean;
  completed: boolean;
  best_stars: number;
  best_percent: number;
  challenges_done: number;
  attempts: number;
};

export type LevelResult = {
  result_percent: number;
  result_stars: Stars;
  result_points: number;
  total_ms: number;
  fully_correct: number;
  prev_best_stars: number;
  new_best_stars: number;
  is_new_best: boolean;
  first_completion: boolean;
  completed_levels: number;
};

interface LocalLevelProgress {
  completed: boolean;
  best_stars: Stars;
  best_percent: number;
  best_score: number;
  attempts: number;
  challenges_done: number;
}

interface LocalAttempt {
  id: string;
  gameSlug: string;
  level: number;
  scores: Record<number, { score: number; durationMs: number; hints: number }>;
  isLocal: boolean;
}

const PROGRESS_STORAGE_KEY = 'biblearena_level_progress_v2';
const ACTIVE_ATTEMPTS_KEY = 'biblearena_active_attempts_v2';

function loadAllLocalProgress(): Record<string, Record<number, LocalLevelProgress>> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveAllLocalProgress(data: Record<string, Record<number, LocalLevelProgress>>) {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage quota errors
  }
}

function loadActiveAttempts(): Record<string, LocalAttempt> {
  try {
    return JSON.parse(localStorage.getItem(ACTIVE_ATTEMPTS_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveActiveAttempts(data: Record<string, LocalAttempt>) {
  try {
    localStorage.setItem(ACTIVE_ATTEMPTS_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function buildLocalLevelMap(game: string, totalLevels = DEFAULT_TOTAL_LEVELS): LevelNode[] {
  const allProgress = loadAllLocalProgress();
  const gameProg = allProgress[game] || {};

  return Array.from({ length: totalLevels }, (_, idx) => {
    const lvl = idx + 1;
    const p = gameProg[lvl];
    const prev = gameProg[lvl - 1];
    const unlocked = lvl === 1 || Boolean(prev?.completed);

    return {
      level: lvl,
      name: getStageTitleForLevel(lvl),
      difficulty: getDifficultyForLevel(lvl),
      challenge_count: CHALLENGES_PER_LEVEL,
      is_published: true,
      unlocked,
      completed: Boolean(p?.completed),
      best_stars: p?.best_stars ?? 0,
      best_percent: p?.best_percent ?? 0,
      challenges_done: p?.challenges_done ?? 0,
      attempts: p?.attempts ?? 0,
    };
  });
}

export async function getLevelMap(game: string): Promise<LevelNode[]> {
  const localNodes = buildLocalLevelMap(game, DEFAULT_TOTAL_LEVELS);

  if (isBackendConfigured && supabase) {
    try {
      const { data, error } = await supabase.rpc('get_level_map', { p_game: game });
      if (!error && Array.isArray(data) && data.length > 0) {
        // Merge remote progress with local progress so levels 1..50 are always playable
        return localNodes.map((localNode) => {
          const remote = (data as LevelNode[]).find((r) => r.level === localNode.level);
          if (!remote) return localNode;
          const completed = Boolean(remote.completed || localNode.completed);
          const best_stars = Math.max(remote.best_stars ?? 0, localNode.best_stars);
          const best_percent = Math.max(Number(remote.best_percent ?? 0), localNode.best_percent);
          return {
            ...localNode,
            name: remote.name || localNode.name,
            difficulty: remote.difficulty || localNode.difficulty,
            is_published: true,
            unlocked: localNode.level === 1 || completed || Boolean(remote.unlocked || localNode.unlocked),
            completed,
            best_stars,
            best_percent,
            challenges_done: Math.max(remote.challenges_done ?? 0, localNode.challenges_done),
            attempts: Math.max(remote.attempts ?? 0, localNode.attempts),
          };
        });
      }
    } catch {
      // Fall back to local level map seamlessly when RPC is missing or permission denied
    }
  }

  return localNodes;
}

export async function startLevel(
  game: string,
  level: number,
  restart = false
): Promise<{ attemptId: string; startIndex: number }> {
  const allProgress = loadAllLocalProgress();
  const gameProg = allProgress[game] || {};

  if (level > 1 && !gameProg[level - 1]?.completed) {
    // Also check if remote says unlocked when backend configured
    let remoteUnlocked = false;
    if (isBackendConfigured && supabase) {
      try {
        const { data } = await supabase.rpc('start_level', {
          p_game: game,
          p_level: level,
          p_restart: restart,
        });
        if (data?.[0]) {
          remoteUnlocked = true;
          const attemptId = data[0].attempt_id as string;
          const startIndex = (data[0].challenges_done as number) || 0;
          const attempts = loadActiveAttempts();
          attempts[attemptId] = {
            id: attemptId,
            gameSlug: game,
            level,
            scores: {},
            isLocal: false,
          };
          saveActiveAttempts(attempts);
          return { attemptId, startIndex };
        }
      } catch {
        // ignore
      }
    }
    if (!remoteUnlocked) {
      throw new Error(`Complete Level ${level - 1} first to unlock Level ${level}.`);
    }
  }

  // Try remote start_level first if signed in
  if (isBackendConfigured && supabase) {
    try {
      const { data, error } = await supabase.rpc('start_level', {
        p_game: game,
        p_level: level,
        p_restart: restart,
      });
      if (!error && data?.[0]) {
        const attemptId = data[0].attempt_id as string;
        const startIndex = (data[0].challenges_done as number) || 0;
        const attempts = loadActiveAttempts();
        attempts[attemptId] = {
          id: attemptId,
          gameSlug: game,
          level,
          scores: {},
          isLocal: false,
        };
        saveActiveAttempts(attempts);
        return { attemptId, startIndex };
      }
    } catch {
      // Fallback to local attempt below
    }
  }

  const attempts = loadActiveAttempts();
  const existingEntry = Object.values(attempts).find(
    (a) => a.gameSlug === game && a.level === level
  );

  if (existingEntry && !restart) {
    const doneCount = Object.keys(existingEntry.scores).length;
    if (doneCount < CHALLENGES_PER_LEVEL) {
      return { attemptId: existingEntry.id, startIndex: doneCount };
    }
  }

  const attemptId = `local-${game}-l${level}-${Date.now()}`;
  attempts[attemptId] = {
    id: attemptId,
    gameSlug: game,
    level,
    scores: {},
    isLocal: true,
  };
  saveActiveAttempts(attempts);

  if (!allProgress[game]) allProgress[game] = {};
  const prev = allProgress[game][level];
  allProgress[game][level] = {
    completed: prev?.completed ?? false,
    best_stars: prev?.best_stars ?? 0,
    best_percent: prev?.best_percent ?? 0,
    best_score: prev?.best_score ?? 0,
    attempts: prev?.attempts ?? 0,
    challenges_done: 0,
  };
  saveAllLocalProgress(allProgress);

  return { attemptId, startIndex: 0 };
}

/** index is 1..10. score is 0..1 (1 = fully correct; puzzles can give partial credit). */
export async function recordChallenge(
  attemptId: string,
  index: number,
  score: number,
  hints = 0,
  ms?: number
) {
  const clean = Math.round(Math.min(1, Math.max(0, score)) * 1000) / 1000;
  const attempts = loadActiveAttempts();
  const attempt = attempts[attemptId];

  if (attempt) {
    attempt.scores[index] = {
      score: clean,
      hints: Math.max(0, hints),
      durationMs: ms ?? 0,
    };
    saveActiveAttempts(attempts);

    const allProgress = loadAllLocalProgress();
    if (!allProgress[attempt.gameSlug]) allProgress[attempt.gameSlug] = {};
    const prev = allProgress[attempt.gameSlug][attempt.level];
    allProgress[attempt.gameSlug][attempt.level] = {
      completed: prev?.completed ?? false,
      best_stars: prev?.best_stars ?? 0,
      best_percent: prev?.best_percent ?? 0,
      best_score: prev?.best_score ?? 0,
      attempts: prev?.attempts ?? 0,
      challenges_done: Math.min(CHALLENGES_PER_LEVEL, index),
    };
    saveAllLocalProgress(allProgress);
  }

  if (!attemptId.startsWith('local-') && isBackendConfigured && supabase) {
    try {
      await supabase.rpc('record_challenge', {
        p_attempt: attemptId,
        p_index: index,
        p_score: clean,
        p_hints: hints,
        p_ms: ms ?? null,
      });
    } catch {
      // Local state already persisted above
    }
  }
}

export async function submitChallengeAnswer(
  attemptId: string,
  challengeIndex: number,
  answer: string,
  hintsUsed = 0,
  durationMs = 0
): Promise<{
  is_correct: boolean;
  score: number;
  correct_answer: string;
  explanation: string;
  reference: string;
}> {
  const attempts = loadActiveAttempts();
  const attempt = attempts[attemptId];
  const gameSlug = attempt?.gameSlug || 'scripture-challenge';
  const level = attempt?.level || 1;

  const localChallenges = buildLocalChallengesForLevel(gameSlug, level);
  const localItem =
    localChallenges.find((c) => c.challenge_index === challengeIndex) ||
    localChallenges[0];

  if (!attemptId.startsWith('local-') && isBackendConfigured && supabase) {
    try {
      const { data, error } = await supabase.rpc('submit_challenge_answer', {
        p_attempt: attemptId,
        p_challenge_index: challengeIndex,
        p_answer: answer,
        p_hints_used: hintsUsed,
        p_duration_ms: durationMs,
      });
      if (!error && data?.[0]) {
        const row = data[0];
        await recordChallenge(
          attemptId,
          challengeIndex,
          Number(row.score ?? (row.is_correct ? 1 : 0)),
          hintsUsed,
          durationMs
        );
        return {
          is_correct: Boolean(row.is_correct),
          score: Number(row.score ?? (row.is_correct ? 1 : 0)),
          correct_answer: localItem.correct_answer,
          explanation: row.explanation || localItem.explanation,
          reference: row.reference || localItem.reference,
        };
      }
    } catch {
      // Fallback to local evaluation below
    }
  }

  const normUser = answer.trim().toLowerCase();
  const normCorrect = localItem.correct_answer.trim().toLowerCase();
  const isCorrect = normUser.length > 0 && normUser === normCorrect;
  const penalty = Math.min(0.4, hintsUsed * 0.15);
  const numericScore = isCorrect ? Math.max(0.2, 1 - penalty) : 0;

  await recordChallenge(attemptId, challengeIndex, numericScore, hintsUsed, durationMs);

  return {
    is_correct: isCorrect,
    score: numericScore,
    correct_answer: localItem.correct_answer,
    explanation: localItem.explanation,
    reference: localItem.reference,
  };
}

export async function finishLevel(attemptId: string): Promise<LevelResult> {
  const attempts = loadActiveAttempts();
  const attempt = attempts[attemptId];

  // Try remote finish_level first when using a server attempt
  if (!attemptId.startsWith('local-') && isBackendConfigured && supabase) {
    try {
      const { data, error } = await supabase.rpc('finish_level', { p_attempt: attemptId });
      if (!error && data?.[0]) {
        const remoteRes = data[0] as LevelResult;
        if (attempt) {
          syncLocalProgressAfterFinish(attempt.gameSlug, attempt.level, remoteRes);
        }
        return remoteRes;
      }
    } catch {
      // Fallback to local calculation below
    }
  }

  const gameSlug = attempt?.gameSlug || 'scripture-challenge';
  const level = attempt?.level || 1;
  const scoresMap = attempt?.scores || {};

  let totalScore = 0;
  let totalMs = 0;
  let fullyCorrect = 0;

  for (let i = 1; i <= CHALLENGES_PER_LEVEL; i++) {
    const entry = scoresMap[i];
    const s = entry?.score ?? 0;
    totalScore += s;
    totalMs += entry?.durationMs ?? 0;
    if (s >= 0.999) fullyCorrect += 1;
  }

  const pct = Math.round((totalScore / CHALLENGES_PER_LEVEL) * 10000) / 100;
  const stars = starsForPercent(pct);
  const points = Math.round(totalScore * 100);

  const allProgress = loadAllLocalProgress();
  if (!allProgress[gameSlug]) allProgress[gameSlug] = {};
  const prev = allProgress[gameSlug][level];

  const firstCompletion = !prev?.completed;
  const prevBestStars = prev?.best_stars ?? 0;
  const newBestStars = Math.max(prevBestStars, stars) as Stars;
  const isNewBest = !firstCompletion && stars > prevBestStars;

  allProgress[gameSlug][level] = {
    completed: true,
    best_stars: newBestStars,
    best_percent: Math.max(prev?.best_percent ?? 0, pct),
    best_score: Math.max(prev?.best_score ?? 0, points),
    attempts: (prev?.attempts ?? 0) + 1,
    challenges_done: CHALLENGES_PER_LEVEL,
  };
  saveAllLocalProgress(allProgress);

  // Update overall user XP stats in localStorage for HomePage & ProfilePage
  try {
    const stats = JSON.parse(
      localStorage.getItem('biblearena_user_stats') ||
        '{"xp": 0, "gamesPlayed": 0, "level": 1, "achievements": []}'
    );
    const newXp = (stats.xp || 0) + points;
    const newGamesPlayed = (stats.gamesPlayed || 0) + 1;
    localStorage.setItem(
      'biblearena_user_stats',
      JSON.stringify({
        ...stats,
        xp: newXp,
        gamesPlayed: newGamesPlayed,
        level: Math.floor(newXp / 500) + 1,
      })
    );
  } catch {
    // ignore
  }

  const completedLevelsCount = Object.values(allProgress[gameSlug]).filter(
    (p) => p.completed
  ).length;

  return {
    result_percent: pct,
    result_stars: stars,
    result_points: points,
    total_ms: totalMs,
    fully_correct: fullyCorrect,
    prev_best_stars: prevBestStars,
    new_best_stars: newBestStars,
    is_new_best: isNewBest,
    first_completion: firstCompletion,
    completed_levels: completedLevelsCount,
  };
}

function syncLocalProgressAfterFinish(
  gameSlug: string,
  level: number,
  res: LevelResult
) {
  const allProgress = loadAllLocalProgress();
  if (!allProgress[gameSlug]) allProgress[gameSlug] = {};
  const prev = allProgress[gameSlug][level];
  allProgress[gameSlug][level] = {
    completed: true,
    best_stars: Math.max(prev?.best_stars ?? 0, res.new_best_stars) as Stars,
    best_percent: Math.max(prev?.best_percent ?? 0, Number(res.result_percent)),
    best_score: Math.max(prev?.best_score ?? 0, res.result_points),
    attempts: (prev?.attempts ?? 0) + 1,
    challenges_done: CHALLENGES_PER_LEVEL,
  };
  saveAllLocalProgress(allProgress);
}

export async function getLevelChallenges(
  gameSlug: string,
  level: number
): Promise<ChallengeItem[]> {
  if (isBackendConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('game_content_public')
        .select(
          'id, game_slug, level, challenge_index, question_text, options, explanation, reference, metadata'
        )
        .eq('game_slug', gameSlug)
        .eq('level', level)
        .order('challenge_index');

      if (!error && Array.isArray(data) && data.length === CHALLENGES_PER_LEVEL) {
        const localBackup = buildLocalChallengesForLevel(gameSlug, level);
        return data.map((row: any, idx: number) => ({
          id: row.id || localBackup[idx].id,
          game_slug: row.game_slug || gameSlug,
          level: row.level || level,
          challenge_index: row.challenge_index || idx + 1,
          question_text: row.question_text || localBackup[idx].question_text,
          options: Array.isArray(row.options) && row.options.length > 0 ? row.options : localBackup[idx].options,
          correct_answer: localBackup[idx].correct_answer,
          explanation: row.explanation || localBackup[idx].explanation,
          reference: row.reference || localBackup[idx].reference,
          metadata: row.metadata || localBackup[idx].metadata,
        }));
      }
    } catch {
      // Fallback to local challenge generator below
    }
  }

  return buildLocalChallengesForLevel(gameSlug, level);
}

import { supabase, isBackendConfigured } from './supabase';
import {
  buildLocalChallengesForLevel,
  getDifficultyForLevel,
  getStageTitleForLevel,
  type ChallengeItem,
} from '../data/bibleContentBank';

export const CHALLENGES_PER_LEVEL = 5;
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
  session_marks: number;
  new_marks_awarded: number;
  total_accumulated_marks: number;
  correct_count: number;
  incorrect_count: number;
  personal_best_marks: number;
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
  best_marks: number;
  attempts: number;
  challenges_done: number;
}

interface LocalAttempt {
  id: string;
  gameSlug: string;
  level: number;
  scores: Record<
    number,
    {
      isCorrect: boolean;
      marks: number;
      isNewMarks: boolean;
      durationMs: number;
    }
  >;
  isLocal: boolean;
}

const PROGRESS_STORAGE_KEY = 'biblearena_level_progress_v2';
const ACTIVE_ATTEMPTS_KEY = 'biblearena_active_attempts_v2';
const TOTAL_MARKS_STORAGE_KEY = 'biblearena_total_marks_v2';
const AWARDED_CHALLENGES_KEY = 'biblearena_awarded_challenges_v2';

const memoryStore: Record<string, string> = {};

function safeStorageGet(key: string): string | null {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem) {
      const val = localStorage.getItem(key);
      if (val !== null) return val;
    }
  } catch {
    // ignore
  }
  return memoryStore[key] ?? null;
}

function safeStorageSet(key: string, value: string): void {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.setItem) {
      localStorage.setItem(key, value);
    }
  } catch {
    // ignore
  }
  memoryStore[key] = value;
}

export function getOverallTotalMarks(): number {
  const val = safeStorageGet(TOTAL_MARKS_STORAGE_KEY);
  return val ? parseInt(val, 10) || 0 : 0;
}

/** Spend earned career marks on an in-game hint. Returns false when the balance is insufficient. */
export function spendOverallMarks(amount: number): { spent: boolean; newTotal: number } {
  const cost = Math.max(0, Math.floor(amount));
  const total = getOverallTotalMarks();
  if (cost === 0) return { spent: true, newTotal: total };
  if (total < cost) return { spent: false, newTotal: total };

  const newTotal = total - cost;
  safeStorageSet(TOTAL_MARKS_STORAGE_KEY, String(newTotal));
  try {
    const stats = JSON.parse(
      safeStorageGet('biblearena_user_stats') ||
        '{"xp": 0, "gamesPlayed": 0, "level": 1, "achievements": []}'
    );
    safeStorageSet('biblearena_user_stats', JSON.stringify({ ...stats, total_marks: newTotal }));
  } catch {
    // The marks balance is already saved; profile stats can be refreshed separately.
  }
  return { spent: true, newTotal };
}

export function getAwardedChallenges(): Set<string> {
  const raw = safeStorageGet(AWARDED_CHALLENGES_KEY);
  return new Set(raw ? JSON.parse(raw) : []);
}

export function recordAwardedChallenge(key: string, marks = 10): { isNew: boolean; newTotal: number } {
  const set = getAwardedChallenges();
  const isNew = !set.has(key);
  let total = getOverallTotalMarks();
  if (isNew) {
    set.add(key);
    total += marks;
    safeStorageSet(AWARDED_CHALLENGES_KEY, JSON.stringify(Array.from(set)));
    safeStorageSet(TOTAL_MARKS_STORAGE_KEY, String(total));
  }
  return { isNew, newTotal: total };
}

function loadAllLocalProgress(): Record<string, Record<number, LocalLevelProgress>> {
  try {
    return JSON.parse(safeStorageGet(PROGRESS_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveAllLocalProgress(data: Record<string, Record<number, LocalLevelProgress>>) {
  safeStorageSet(PROGRESS_STORAGE_KEY, JSON.stringify(data));
}

function loadActiveAttempts(): Record<string, LocalAttempt> {
  try {
    return JSON.parse(safeStorageGet(ACTIVE_ATTEMPTS_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveActiveAttempts(data: Record<string, LocalAttempt>) {
  safeStorageSet(ACTIVE_ATTEMPTS_KEY, JSON.stringify(data));
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
      is_published: lvl <= 30,
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
        // Merge remote progress while respecting the 30-level publication boundary for every game
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
            is_published: localNode.is_published && Boolean(remote.is_published),
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
  if (level > 30) {
    throw new Error(`Level ${level} is coming soon. Please try Levels 1–30 for now.`);
  }
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
    best_marks: prev?.best_marks ?? 0,
    attempts: prev?.attempts ?? 0,
    challenges_done: 0,
  };
  saveAllLocalProgress(allProgress);

  return { attemptId, startIndex: 0 };
}

/** Record challenge result. Score is 10 for correct, 0 for incorrect. */
export async function recordChallenge(
  attemptId: string,
  index: number,
  isCorrect: boolean,
  isNewMarks: boolean,
  ms?: number
) {
  const marks = isCorrect ? 10 : 0;
  const attempts = loadActiveAttempts();
  const attempt = attempts[attemptId];

  if (attempt) {
    attempt.scores[index] = {
      isCorrect,
      marks,
      isNewMarks,
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
      best_marks: prev?.best_marks ?? 0,
      attempts: prev?.attempts ?? 0,
      challenges_done: Math.min(CHALLENGES_PER_LEVEL, index),
    };
    saveAllLocalProgress(allProgress);
  }

}

export async function submitChallengeAnswer(
  attemptId: string,
  questionIdOrIndex: string | number,
  answerOrIndex: string | number,
  rawAnswerOrHints?: string | number,
  durationMs = 0,
  clientQuestion?: ChallengeItem
): Promise<{
  is_correct: boolean;
  score: number;
  marks_awarded: number;
  is_new_marks: boolean;
  session_marks: number;
  total_marks: number;
  correct_answer: string;
  explanation: string;
  reference: string;
}> {
  const attempts = loadActiveAttempts();
  const attempt = attempts[attemptId];
  const gameSlug = attempt?.gameSlug || 'scripture-challenge';
  const level = attempt?.level || 1;

  let questionId: string;
  let challengeIndex: number;
  let answer: string;

  if (typeof questionIdOrIndex === 'string') {
    questionId = questionIdOrIndex;
    challengeIndex = typeof answerOrIndex === 'number' ? answerOrIndex : 1;
    answer = typeof rawAnswerOrHints === 'string' ? rawAnswerOrHints : String(rawAnswerOrHints ?? '');
  } else {
    challengeIndex = questionIdOrIndex;
    answer = typeof answerOrIndex === 'string' ? answerOrIndex : '';
    questionId = clientQuestion?.id || `${gameSlug}-l${level}-c${challengeIndex}`;
  }

  // Find exact question object: priority to clientQuestion if matched, then id lookup, then index fallback
  let localItem: ChallengeItem | undefined;
  if (clientQuestion && clientQuestion.id === questionId) {
    localItem = clientQuestion;
  }

  if (!localItem) {
    const localChallenges = buildLocalChallengesForLevel(gameSlug, level);
    localItem = localChallenges.find((c) => c.id === questionId);
    if (!localItem) {
      localItem = localChallenges.find((c) => c.challenge_index === challengeIndex) || localChallenges[0];
    }
  }

  const challengeKey = `${gameSlug}-l${level}-c${challengeIndex}`;

  if (!attemptId.startsWith('local-') && isBackendConfigured && supabase) {
    const { data, error } = await supabase.rpc('submit_challenge_answer', {
      p_attempt: attemptId,
      p_challenge_index: challengeIndex,
      p_answer: answer,
      p_hints_used: 0,
      p_duration_ms: durationMs,
      p_question_id: questionId,
      p_expected_answer: localItem.correct_answer,
    });
    if (error) {
      throw new Error(`Your answer could not be saved. Please try again. (${error.message})`);
    }
    if (!data?.[0]) {
      throw new Error('The server did not confirm your answer. Please try again.');
    }

    const row = data[0];
    const isCorrect = Boolean(row.is_correct);
    const { isNew, newTotal } = isCorrect
      ? recordAwardedChallenge(challengeKey, 10)
      : { isNew: false, newTotal: getOverallTotalMarks() };

    // The answer RPC has already saved the authoritative result in Supabase.
    // This call only updates the local UI cache.
    await recordChallenge(attemptId, challengeIndex, isCorrect, isNew, durationMs);

    const currentAttempt = loadActiveAttempts()[attemptId];
    const sessionMarks = Object.values(currentAttempt?.scores || {}).reduce(
      (sum, s) => sum + (s.isCorrect ? 10 : 0),
      0
    );

    return {
      is_correct: isCorrect,
      score: isCorrect ? 10 : 0,
      marks_awarded: isCorrect ? 10 : 0,
      is_new_marks: isNew,
      session_marks: sessionMarks,
      total_marks: newTotal,
      correct_answer: localItem.correct_answer,
      explanation: row.explanation || localItem.explanation,
      reference: row.reference || localItem.reference,
    };
  }

  const normUser = answer.trim().toLowerCase();
  const normCorrect = localItem.correct_answer.trim().toLowerCase();
  const isCorrect = normUser.length > 0 && normUser === normCorrect;

  // Anti-farming check: only add to persistent overall total if this challenge wasn't awarded before
  const { isNew, newTotal } = isCorrect
    ? recordAwardedChallenge(challengeKey, 10)
    : { isNew: false, newTotal: getOverallTotalMarks() };

  await recordChallenge(attemptId, challengeIndex, isCorrect, isNew, durationMs);

  const updatedAttempt = loadActiveAttempts()[attemptId];
  const sessionMarks = Object.values(updatedAttempt?.scores || {}).reduce(
    (sum, s) => sum + (s.isCorrect ? 10 : 0),
    0
  );

  return {
    is_correct: isCorrect,
    score: isCorrect ? 10 : 0,
    marks_awarded: isCorrect ? 10 : 0,
    is_new_marks: isNew,
    session_marks: sessionMarks,
    total_marks: newTotal,
    correct_answer: localItem.correct_answer,
    explanation: localItem.explanation,
    reference: localItem.reference,
  };
}

export async function finishLevel(attemptId: string): Promise<LevelResult> {
  const attempts = loadActiveAttempts();
  const attempt = attempts[attemptId];

  const gameSlug = attempt?.gameSlug || 'scripture-challenge';
  const level = attempt?.level || 1;
  const scoresMap = attempt?.scores || {};

  let totalMs = 0;
  let correctCount = 0;
  let newMarksCount = 0;

  for (let i = 1; i <= CHALLENGES_PER_LEVEL; i++) {
    const entry = scoresMap[i];
    totalMs += entry?.durationMs ?? 0;
    if (entry?.isCorrect) {
      correctCount += 1;
      if (entry.isNewMarks) {
        newMarksCount += 1;
      }
    }
  }

  const incorrectCount = CHALLENGES_PER_LEVEL - correctCount;
  const sessionMarks = correctCount * 10;
  const newMarksAwarded = newMarksCount * 10;
  const pct = Math.round((correctCount / CHALLENGES_PER_LEVEL) * 100);
  const stars = starsForPercent(pct);

  const allProgress = loadAllLocalProgress();
  if (!allProgress[gameSlug]) allProgress[gameSlug] = {};
  const prev = allProgress[gameSlug][level];

  const firstCompletion = !prev?.completed;
  const prevBestStars = prev?.best_stars ?? 0;
  const newBestStars = Math.max(prevBestStars, stars) as Stars;
  const isNewBest = !firstCompletion && stars > prevBestStars;
  const personalBestMarks = Math.max(prev?.best_marks ?? 0, sessionMarks);

  allProgress[gameSlug][level] = {
    completed: true,
    best_stars: newBestStars,
    best_percent: Math.max(prev?.best_percent ?? 0, pct),
    best_score: Math.max(prev?.best_score ?? 0, sessionMarks),
    best_marks: personalBestMarks,
    attempts: (prev?.attempts ?? 0) + 1,
    challenges_done: CHALLENGES_PER_LEVEL,
  };
  saveAllLocalProgress(allProgress);

  // A server-backed attempt must be completed by Supabase before local
  // progress is marked complete. Never report a false local-only success.
  let remoteRes: any = null;
  if (!attemptId.startsWith('local-') && isBackendConfigured && supabase) {
    const { data, error } = await supabase.rpc('finish_level', { p_attempt: attemptId });
    if (error) {
      throw new Error(`Your level result could not be saved. Please try again. (${error.message})`);
    }
    if (!data?.[0]) {
      throw new Error('The server did not confirm level completion. Please try again.');
    }
    remoteRes = data[0];
  }

  // Local-only/offline sessions keep a local XP display. Registered players
  // receive authoritative XP from finish_level in Supabase.
  if (attemptId.startsWith('local-')) {
    try {
      const stats = JSON.parse(
        localStorage.getItem('biblearena_user_stats') ||
          '{"xp": 0, "gamesPlayed": 0, "level": 1, "achievements": []}'
      );
      const newXp = (stats.xp || 0) + sessionMarks;
      const newGamesPlayed = (stats.gamesPlayed || 0) + 1;
      localStorage.setItem(
        'biblearena_user_stats',
        JSON.stringify({
          ...stats,
          xp: newXp,
          total_marks: getOverallTotalMarks(),
          gamesPlayed: newGamesPlayed,
          level: Math.floor(newXp / 500) + 1,
        })
      );
    } catch {
      // ignore local cache failures
    }
  }

  if (remoteRes && attempt) {
    syncLocalProgressAfterFinish(attempt.gameSlug, attempt.level, {
      ...remoteRes,
      session_marks: sessionMarks,
      new_marks_awarded: newMarksAwarded,
      total_accumulated_marks: getOverallTotalMarks(),
      correct_count: correctCount,
      incorrect_count: incorrectCount,
      personal_best_marks: personalBestMarks,
    });
  }

  const completedLevelsCount = Object.values(allProgress[gameSlug]).filter(
    (p) => p.completed
  ).length;

  return {
    result_percent: pct,
    result_stars: stars,
    result_points: sessionMarks,
    session_marks: sessionMarks,
    new_marks_awarded: newMarksAwarded,
    total_accumulated_marks: getOverallTotalMarks(),
    correct_count: correctCount,
    incorrect_count: incorrectCount,
    personal_best_marks: personalBestMarks,
    total_ms: totalMs,
    fully_correct: correctCount,
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
    best_marks: Math.max(prev?.best_marks ?? 0, res.personal_best_marks ?? res.session_marks),
    attempts: (prev?.attempts ?? 0) + 1,
    challenges_done: CHALLENGES_PER_LEVEL,
  };
  saveAllLocalProgress(allProgress);
}

export async function getLevelChallenges(
  gameSlug: string,
  level: number,
  variationSeed = 0
): Promise<ChallengeItem[]> {
  // Bible Chain is generated per attempt so players never receive a fixed replay set.
  if (gameSlug === 'bible-chain-challenge') {
    return buildLocalChallengesForLevel(gameSlug, level, variationSeed);
  }

  if (isBackendConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('game_content_public')
        .select(
          'id, question_key, game_slug, level, challenge_index, question_text, options, correct_answer, explanation, reference, metadata'
        )
        .eq('game_slug', gameSlug)
        .eq('level', level)
        .order('challenge_index');

      if (!error && Array.isArray(data) && data.length === CHALLENGES_PER_LEVEL) {
        const localBackup = buildLocalChallengesForLevel(gameSlug, level);
        return data.map((row: any, idx: number) => ({
          id: row.question_key || localBackup[idx].id,
          game_slug: row.game_slug || gameSlug,
          level: row.level || level,
          challenge_index: row.challenge_index || idx + 1,
          question_text: row.question_text || localBackup[idx].question_text,
          options: Array.isArray(row.options) && row.options.length > 0 ? row.options : localBackup[idx].options,
          correct_answer: row.correct_answer || localBackup[idx].correct_answer,
          explanation: row.explanation || localBackup[idx].explanation,
          reference: row.reference || localBackup[idx].reference,
          metadata: { ...localBackup[idx].metadata, ...(row.metadata || {}) },
        }));
      }
    } catch {
      // Fallback to local challenge generator below
    }
  }

  return buildLocalChallengesForLevel(gameSlug, level);
}

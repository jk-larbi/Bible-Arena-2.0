import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import {
  ALL_19_GAME_SLUGS,
  buildLocalChallengesForLevel,
  getDifficultyForLevel,
} from '../src/data/bibleContentBank';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const dryRun = process.argv.includes('--dry-run');

async function main() {
  const questions = ALL_19_GAME_SLUGS.flatMap((gameSlug) =>
    Array.from({ length: 50 }, (_, index) =>
      buildLocalChallengesForLevel(gameSlug, index + 1),
    ).flat(),
  );

  const levels = ALL_19_GAME_SLUGS.flatMap((game_slug) =>
    Array.from({ length: 50 }, (_, index) => {
      const level = index + 1;
      return {
        game_slug,
        level,
        name: `Level ${level}`,
        difficulty: getDifficultyForLevel(level),
        challenge_count: 10,
        is_published: true,
      };
    }),
  );

  if (questions.length !== 9500 || levels.length !== 950) {
    throw new Error(`Unexpected content bank size: ${questions.length} questions, ${levels.length} levels.`);
  }

  const questionRows = questions.map((q) => ({
    question_key: q.id,
    game_slug: q.game_slug,
    level: q.level,
    challenge_index: q.challenge_index,
    question_text: q.question_text,
    options: q.options,
    correct_answer: q.correct_answer,
    explanation: q.explanation,
    reference: q.reference,
    metadata: q.metadata ?? {},
  }));

  const seenKeys = new Set<string>();
  for (const q of questionRows) {
    if (!q.question_key || seenKeys.has(q.question_key)) {
      throw new Error(`Missing or duplicate stable question key: ${q.question_key}`);
    }
    seenKeys.add(q.question_key);
    if (!q.game_slug || !q.question_text?.trim() || !q.correct_answer?.trim() || !q.reference?.trim()) {
      throw new Error(`Incomplete question content: ${q.question_key}`);
    }
    if (q.question_key !== `${q.game_slug}-l${q.level}-c${q.challenge_index}`) {
      throw new Error(`Question key does not match game/level/index: ${q.question_key}`);
    }
  }

  for (const gameSlug of ALL_19_GAME_SLUGS) {
    const gameQuestions = questionRows.filter((q) => q.game_slug === gameSlug);
    const gameLevels = levels.filter((level) => level.game_slug === gameSlug);
    if (gameQuestions.length !== 500 || gameLevels.length !== 50) {
      throw new Error(`Unexpected bank size for ${gameSlug}: ${gameQuestions.length} questions, ${gameLevels.length} levels.`);
    }
    for (let level = 1; level <= 50; level++) {
      if (gameQuestions.filter((q) => q.level === level).length !== 10) {
        throw new Error(`Expected 10 questions for ${gameSlug}, level ${level}.`);
      }
    }
  }

  if (dryRun) {
    console.log(`Validated ${questionRows.length} unique questions and ${levels.length} levels across ${ALL_19_GAME_SLUGS.length} games.`);
    return;
  }

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment. Never use a publishable/anon key for this script.');
  }
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  for (let offset = 0; offset < questionRows.length; offset += 200) {
    const batch = questionRows.slice(offset, offset + 200);
    const { error } = await supabase
      .from('game_content')
      .upsert(batch, { onConflict: 'question_key' });
    if (error) throw new Error(`Question batch ${Math.floor(offset / 200) + 1} failed: ${error.message}`);
    console.log(`Uploaded questions ${offset + 1}-${offset + batch.length} of ${questionRows.length}`);
  }

  for (let offset = 0; offset < levels.length; offset += 200) {
    const batch = levels.slice(offset, offset + 200);
    const { error } = await supabase
      .from('game_levels')
      .upsert(batch, { onConflict: 'game_slug,level' });
    if (error) throw new Error(`Level batch ${Math.floor(offset / 200) + 1} failed: ${error.message}`);
  }

  for (const gameSlug of ALL_19_GAME_SLUGS) {
    const [{ count: questionCount, error: questionCountError }, { count: levelCount, error: levelCountError }] = await Promise.all([
      supabase.from('game_content').select('id', { count: 'exact', head: true }).eq('game_slug', gameSlug),
      supabase.from('game_levels').select('level', { count: 'exact', head: true }).eq('game_slug', gameSlug),
    ]);
    if (questionCountError) throw new Error(`Could not verify questions for ${gameSlug}: ${questionCountError.message}`);
    if (levelCountError) throw new Error(`Could not verify levels for ${gameSlug}: ${levelCountError.message}`);
    if (questionCount !== 500 || levelCount !== 50) {
      throw new Error(`Post-upload verification failed for ${gameSlug}: ${questionCount} questions, ${levelCount} levels.`);
    }
    console.log(`Verified ${gameSlug}: 500 questions and 50 levels.`);
  }

  console.log(`SUCCESS: Published and verified ${questionRows.length} questions and ${levels.length} levels across ${ALL_19_GAME_SLUGS.length} games.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

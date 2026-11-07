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

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment. Never use a publishable/anon key for this script.');
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

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

  if (dryRun) {
    console.log(`Validated ${questionRows.length} questions and ${levels.length} levels across ${ALL_19_GAME_SLUGS.length} games.`);
    return;
  }

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

  console.log(`Published ${questionRows.length} questions and ${levels.length} levels across ${ALL_19_GAME_SLUGS.length} games.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Generates an idempotent SQL sync file for Supabase's public.game_content table
import * as fs from 'fs';
import * as path from 'path';
import { ALL_19_GAME_SLUGS, buildLocalChallengesForLevel } from '../src/data/bibleContentBank';

function escapeSqlString(str: string): string {
  if (str === null || str === undefined) return "''";
  return "'" + str.replace(/'/g, "''") + "'";
}

function escapeSqlArray(arr: string[]): string {
  if (!arr || arr.length === 0) return "'{}'::text[]";
  const elements = arr.map((item) => {
    const escaped = item.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${escaped}"`;
  });
  return `'${elements.join(',')}'::text[]`;
}

function escapeSqlJson(obj: any): string {
  if (!obj) return "'{}'::jsonb";
  const jsonStr = JSON.stringify(obj).replace(/'/g, "''");
  return `'${jsonStr}'::jsonb`;
}

console.log('Generating Supabase sync SQL for all 19 games...');

const outputDir = path.resolve(process.cwd(), 'supabase');
const migrationPath = path.resolve(process.cwd(), 'supabase/migrations/20261109120000_sync_curated_game_content.sql');
const syncScriptPath = path.resolve(process.cwd(), 'supabase/sync_game_content.sql');

let sql = `-- Supabase Game Content Synchronization Script
-- Synchronizes 4,750 challenges across 50 levels and all 19 games into public.game_content
-- Safe & Idempotent: Uses ON CONFLICT (id) DO UPDATE

BEGIN;

CREATE TABLE IF NOT EXISTS public.game_content (
  id text PRIMARY KEY,
  game_slug text NOT NULL,
  level integer NOT NULL,
  challenge_index smallint NOT NULL,
  question_text text NOT NULL,
  options text[] NOT NULL DEFAULT '{}',
  correct_answer text NOT NULL,
  explanation text NOT NULL,
  reference text NOT NULL,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_game_content_game_level_challenge
  ON public.game_content(game_slug, level, challenge_index);

`;

let totalChallenges = 0;
const BATCH_SIZE = 100;
let currentBatch: string[] = [];

for (const gameSlug of ALL_19_GAME_SLUGS) {
  for (let level = 1; level <= 50; level++) {
    const items = buildLocalChallengesForLevel(gameSlug, level);
    for (const item of items) {
      totalChallenges++;
      const val = `(
        ${escapeSqlString(item.id)},
        ${escapeSqlString(item.game_slug)},
        ${item.level},
        ${item.challenge_index},
        ${escapeSqlString(item.question_text)},
        ${escapeSqlArray(item.options)},
        ${escapeSqlString(item.correct_answer)},
        ${escapeSqlString(item.explanation)},
        ${escapeSqlString(item.reference)},
        ${escapeSqlJson(item.metadata || {})}
      )`;
      currentBatch.push(val);

      if (currentBatch.length >= BATCH_SIZE) {
        sql += `INSERT INTO public.game_content (
  id, game_slug, level, challenge_index, question_text, options, correct_answer, explanation, reference, metadata
) VALUES
${currentBatch.join(',\n')}
ON CONFLICT (id) DO UPDATE SET
  game_slug = EXCLUDED.game_slug,
  level = EXCLUDED.level,
  challenge_index = EXCLUDED.challenge_index,
  question_text = EXCLUDED.question_text,
  options = EXCLUDED.options,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  metadata = EXCLUDED.metadata;\n\n`;
        currentBatch = [];
      }
    }
  }
}

if (currentBatch.length > 0) {
  sql += `INSERT INTO public.game_content (
  id, game_slug, level, challenge_index, question_text, options, correct_answer, explanation, reference, metadata
) VALUES
${currentBatch.join(',\n')}
ON CONFLICT (id) DO UPDATE SET
  game_slug = EXCLUDED.game_slug,
  level = EXCLUDED.level,
  challenge_index = EXCLUDED.challenge_index,
  question_text = EXCLUDED.question_text,
  options = EXCLUDED.options,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  metadata = EXCLUDED.metadata;\n\n`;
  currentBatch = [];
}

sql += `COMMIT;\n`;

fs.writeFileSync(migrationPath, sql, 'utf-8');
fs.writeFileSync(syncScriptPath, sql, 'utf-8');

console.log(`Generated ${migrationPath} and ${syncScriptPath} (${totalChallenges} challenges, ${sql.length} bytes).`);

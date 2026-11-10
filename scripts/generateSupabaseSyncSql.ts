// Generates a safe, idempotent sync for the five database-backed games.
// The other fourteen games are loaded from the local curated bank at runtime.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { buildLocalChallengesForLevel } from '../src/data/bibleContentBank';

const DATABASE_GAMES = [
  'scripture-challenge',
  'who-said-it',
  'bible-detective',
  'old-vs-new-testament',
  'bible-word-search',
] as const;
const PUBLISHED_LEVELS = 30;
const CHALLENGES_PER_LEVEL = 5;
const BATCH_SIZE = 50;

function sqlString(value: unknown): string {
  if (value === null || value === undefined) return "''";
  return "'" + String(value).replace(/'/g, "''") + "'";
}

function sqlArray(values: string[] | undefined): string {
  const safe = Array.isArray(values) ? values : [];
  if (!safe.length) return "ARRAY[]::text[]";
  return `ARRAY[${safe.map(sqlString).join(', ')}]::text[]`;
}

function sqlJson(value: unknown): string {
  return sqlString(JSON.stringify(value ?? {})) + '::jsonb';
}

const outputPath = path.resolve(process.cwd(), 'supabase/sync_published_game_content.sql');
let sql = `-- BibleArena published database content sync.
-- Generated from buildLocalChallengesForLevel; 5 database-backed games x 30 levels x 5 questions.
-- Preserves UUID primary keys and existing player progress; matches rows by the unique game/level/challenge key.
BEGIN;

`;
let total = 0;
let batch: string[] = [];

function flushBatch() {
  if (!batch.length) return;
  sql += `INSERT INTO public.game_content (
  question_key, game_slug, level, challenge_index, question_text,
  options, correct_answer, explanation, reference, metadata
) VALUES
${batch.join(',\n')}
ON CONFLICT (game_slug, level, challenge_index) DO UPDATE SET
  question_key = EXCLUDED.question_key,
  question_text = EXCLUDED.question_text,
  options = EXCLUDED.options,
  correct_answer = EXCLUDED.correct_answer,
  explanation = EXCLUDED.explanation,
  reference = EXCLUDED.reference,
  metadata = EXCLUDED.metadata;

`;
  batch = [];
}

for (const gameSlug of DATABASE_GAMES) {
  for (let level = 1; level <= PUBLISHED_LEVELS; level++) {
    const items = buildLocalChallengesForLevel(gameSlug, level);
    if (items.length !== CHALLENGES_PER_LEVEL) {
      throw new Error(`${gameSlug} level ${level}: expected 5 questions, got ${items.length}`);
    }
    for (const item of items) {
      if (!item.id || !item.question_text?.trim() || !item.correct_answer?.trim() ||
          !item.explanation?.trim() || !item.reference?.trim()) {
        throw new Error(`${gameSlug} L${level} C${item.challenge_index}: incomplete published question`);
      }
      const values = [
        sqlString(item.id),
        sqlString(item.game_slug),
        String(item.level),
        String(item.challenge_index),
        sqlString(item.question_text),
        sqlArray(item.options),
        sqlString(item.correct_answer),
        sqlString(item.explanation),
        sqlString(item.reference),
        sqlJson(item.metadata),
      ];
      batch.push(`(${values.join(', ')})`);
      total++;
      if (batch.length >= BATCH_SIZE) flushBatch();
    }
  }
}
flushBatch();
sql += 'COMMIT;\n';
fs.writeFileSync(outputPath, sql, 'utf8');
console.log(`Generated ${outputPath}: ${total} published questions across ${DATABASE_GAMES.length} database-backed games.`);

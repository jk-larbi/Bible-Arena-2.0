import { BIBLE_RIDDLES_BATCH_01 } from '../src/data/rebuild/bibleRiddlesBatch01';
import { BIBLE_DETECTIVE_BATCH_01 } from '../src/data/rebuild/bibleDetectiveBatch01';
import { BIBLE_GEOGRAPHY_BATCH_01 } from '../src/data/rebuild/bibleGeographyBatch01';

const ALL_BATCHES = [...BIBLE_RIDDLES_BATCH_01, ...BIBLE_DETECTIVE_BATCH_01, ...BIBLE_GEOGRAPHY_BATCH_01];

const normalize = (value: string) =>
  value.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const errors: string[] = [];
const ids = new Set<string>();
const questions = new Set<string>();
const facts = new Set<string>();
const byGameLevel = new Map<string, number>();

for (const item of ALL_BATCHES) {
  const gameLevel = `${item.game_slug}:${item.level}`;
  byGameLevel.set(gameLevel, (byGameLevel.get(gameLevel) ?? 0) + 1);
  if (ids.has(item.id)) errors.push(`Duplicate ID: ${item.id}`);
  ids.add(item.id);

  const q = normalize(item.question_text);
  if (questions.has(q)) errors.push(`Duplicate question wording: ${item.id}`);
  questions.add(q);

  const factKey = String(item.metadata?.fact_key ?? '');
  if (!factKey) errors.push(`Missing unique fact key: ${item.id}`);
  else if (facts.has(factKey)) errors.push(`Reused Bible fact: ${factKey}`);
  facts.add(factKey);

  if (!item.reference.trim()) errors.push(`Missing Bible reference: ${item.id}`);
  if (!item.explanation.trim()) errors.push(`Missing explanation: ${item.id}`);
  if (!item.correct_answer.trim()) errors.push(`Missing answer: ${item.id}`);
  if (item.options.length !== 4 || new Set(item.options.map(normalize)).size !== 4) {
    errors.push(`Expected four distinct options: ${item.id}`);
  }
  if (!item.options.some((option) => normalize(option) === normalize(item.correct_answer))) {
    errors.push(`Correct answer missing from options: ${item.id}`);
  }
}

for (const [game, maxLevel] of [['bible-riddles', 5], ['bible-detective', 5], ['bible-geography-quest', 20]] as const) {
  for (let level = 1; level <= maxLevel; level++) {
    const key = `${game}:${level}`;
    if (byGameLevel.get(key) !== 5) {
      errors.push(`${key}: expected five questions, found ${byGameLevel.get(key) ?? 0}`);
    }
  }
}

if (errors.length) {
  console.error('REBUILD BATCH AUDIT FAILED');
  errors.forEach((error) => console.error(' - ' + error));
  process.exit(1);
}

console.log('REBUILD BATCH AUDIT PASSED');
console.log(`Questions: ${ALL_BATCHES.length}; games: ${new Set(ALL_BATCHES.map((item) => item.game_slug)).size}; unique wording: ${questions.size}; unique fact keys: ${facts.size}`);
console.log('Note: this structural audit does not replace human verification of every Bible reference and interpretation.');

// CI trigger: staged batch validation is required before any live-bank replacement.

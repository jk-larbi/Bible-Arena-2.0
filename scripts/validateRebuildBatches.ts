import { BIBLE_RIDDLES_BATCH_01 } from '../src/data/rebuild/bibleRiddlesBatch01';
import { BIBLE_DETECTIVE_BATCH_01 } from '../src/data/rebuild/bibleDetectiveBatch01';
import { BIBLE_GEOGRAPHY_BATCH_01 } from '../src/data/rebuild/bibleGeographyBatch01';
import { BIBLE_CHARACTER_VERIFIED_BATCH_01 } from '../src/data/rebuild/bibleCharacterVerifiedBatch01';
import { BIBLE_CHARACTER_VERIFIED_BATCH_02 } from '../src/data/rebuild/bibleCharacterVerifiedBatch02';
import { WHO_SAID_IT_BATCH_01 } from '../src/data/rebuild/whoSaidItBatch01';
import { BIBLE_TIMELINE_BATCH_01 } from '../src/data/rebuild/bibleTimelineBatch01';
import { FIND_BIBLE_BOOK_BATCH_01 } from '../src/data/rebuild/findBibleBookBatch01';
import { BIBLE_TIMELINE_BATCH_02 } from '../src/data/rebuild/bibleTimelineBatch02';
import { BIBLE_GEOGRAPHY_BATCH_02 } from '../src/data/rebuild/bibleGeographyBatch02';
import { FIND_BIBLE_BOOK_BATCH_02 } from '../src/data/rebuild/findBibleBookBatch02';
import { BIBLE_DETECTIVE_BATCH_02 } from '../src/data/rebuild/bibleDetectiveBatch02';
import { BIBLE_DETECTIVE_BATCH_03 } from '../src/data/rebuild/bibleDetectiveBatch03';
import { BIBLE_DETECTIVE_BATCH_04 } from '../src/data/rebuild/bibleDetectiveBatch04';
import { BIBLE_DETECTIVE_BATCH_05 } from '../src/data/rebuild/bibleDetectiveBatch05';
import { BIBLE_TIMELINE_BATCH_03 } from '../src/data/rebuild/bibleTimelineBatch03';

const ALL_BATCHES = [...BIBLE_RIDDLES_BATCH_01, ...BIBLE_DETECTIVE_BATCH_01, ...BIBLE_GEOGRAPHY_BATCH_01, ...BIBLE_CHARACTER_VERIFIED_BATCH_01, ...BIBLE_CHARACTER_VERIFIED_BATCH_02, ...WHO_SAID_IT_BATCH_01, ...BIBLE_TIMELINE_BATCH_01, ...FIND_BIBLE_BOOK_BATCH_01, ...BIBLE_TIMELINE_BATCH_02, ...BIBLE_GEOGRAPHY_BATCH_02, ...FIND_BIBLE_BOOK_BATCH_02, ...BIBLE_DETECTIVE_BATCH_02, ...BIBLE_DETECTIVE_BATCH_03, ...BIBLE_DETECTIVE_BATCH_04, ...BIBLE_DETECTIVE_BATCH_05, ...BIBLE_TIMELINE_BATCH_03];

// Passage-reviewed speaker corrections. These checks guard against the exact
// attribution mistakes found during the Bible-text audit.
const REVIEWED_WHO_SAID_IT = [
  { fact: 'who-said-it-fact-8', answer: 'The people of Israel', reference: '1 Kings 18:39' },
  { fact: 'who-said-it-fact-10', answer: 'Jesus', reference: 'John 14:1' },
  { fact: 'who-said-it-fact-44', answer: 'The LORD', reference: 'Judges 6:14' },
  { fact: 'who-said-it-fact-74', answer: 'The lamenting speaker in Lamentations', reference: 'Lamentations 3:23' },
  { fact: 'who-said-it-fact-77', answer: 'Israel, personified as the unfaithful wife', reference: 'Hosea 2:7' },
  { fact: 'who-said-it-fact-85', answer: 'An unnamed midnight herald', reference: 'Matthew 25:6' },
] as const;

for (const reviewed of REVIEWED_WHO_SAID_IT) {
  const item = ALL_BATCHES.find((entry) => entry.metadata?.fact_key === reviewed.fact);
  if (!item) {
    console.error(`Missing reviewed Who Said It fact: ${reviewed.fact}`);
    process.exit(1);
  }
  if (item.correct_answer !== reviewed.answer || normalize(item.reference) !== normalize(reviewed.reference)) {
    console.error(`Reviewed speaker attribution regressed: ${reviewed.fact}`);
    process.exit(1);
  }
}


const normalize = (value: string) =>
  value.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const errors: string[] = [];
const ids = new Set<string>();
const questions = new Set<string>();
const facts = new Set<string>();
const referenceAnswerFacts = new Set<string>();
const detectiveReferences = new Set<string>();
const byGameLevel = new Map<string, number>();
const challengeIndexes = new Map<string, Set<number>>();

for (const item of ALL_BATCHES) {
  const gameLevel = `${item.game_slug}:${item.level}`;
  byGameLevel.set(gameLevel, (byGameLevel.get(gameLevel) ?? 0) + 1);
  const indexes = challengeIndexes.get(gameLevel) ?? new Set<number>();
  if (indexes.has(item.challenge_index)) errors.push(`Duplicate challenge index ${item.challenge_index} in ${gameLevel}`);
  indexes.add(item.challenge_index);
  challengeIndexes.set(gameLevel, indexes);
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
  if (item.game_slug === 'bible-detective') {
    const detectiveReference = normalize(item.reference);
    if (detectiveReferences.has(detectiveReference)) {
      errors.push(`Bible Detective reuses a passage: ${item.id} (${detectiveReference})`);
    }
    detectiveReferences.add(detectiveReference);
    const expectedDifficulty =
      item.level <= 10 ? 'beginner' :
      item.level <= 20 ? 'easy' : 'intermediate';
    if (item.metadata?.difficulty !== expectedDifficulty) {
      errors.push(`Bible Detective difficulty progression mismatch: ${item.id}`);
    }
  }
  const referenceAnswerFact = `${normalize(item.reference)}|${normalize(item.correct_answer)}`;
  if (referenceAnswerFacts.has(referenceAnswerFact)) errors.push(`Repeated reference-and-answer fact: ${item.id} (${referenceAnswerFact})`);
  referenceAnswerFacts.add(referenceAnswerFact);
  if (!item.explanation.trim()) errors.push(`Missing explanation: ${item.id}`);
  if (!item.correct_answer.trim()) errors.push(`Missing answer: ${item.id}`);
  if (item.options.length !== 4 || new Set(item.options.map(normalize)).size !== 4) {
    errors.push(`Expected four distinct options: ${item.id}`);
  }
  if (!item.options.some((option) => normalize(option) === normalize(item.correct_answer))) {
    errors.push(`Correct answer missing from options: ${item.id}`);
  }
}

for (const [game, maxLevel] of [['bible-riddles', 5], ['bible-detective', 30], ['bible-geography-quest', 40], ['bible-character-quest', 20], ['who-said-it', 20], ['bible-timeline', 50], ['find-the-bible-book', 40]] as const) {
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

// Keep this validator intentionally structural; human review remains required for Scripture accuracy and semantic duplication.

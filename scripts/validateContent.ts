import {
  ALL_19_GAME_SLUGS,
  buildLocalChallengesForLevel,
  getDifficultyForLevel,
} from '../src/data/bibleContentBank';

const LEVELS_TO_VALIDATE = 50;
const CHALLENGES_PER_LEVEL = 5;

const normalize = (value: string) =>
  value.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const normalizeReference = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '').trim();

async function validate() {
  console.log('=== BibleArena 2.0 FULL CONTENT AUDIT ===');
  let totalChallenges = 0;
  let duplicateQuestionCount = 0;
  let duplicateFactCount = 0;
  let duplicateOptionCount = 0;
  const seenIds = new Set<string>();
  const seenQuestions = new Map<string, string>();
  const seenFacts = new Map<string, string>();
  const errors: string[] = [];

  const expectedTiers = ['beginner', 'easy', 'intermediate', 'advanced', 'expert'];
  const actualTiers = new Set<string>();
  let previousTierIndex = -1;

  for (let level = 1; level <= LEVELS_TO_VALIDATE; level++) {
    const tier = getDifficultyForLevel(level);
    const tierIndex = expectedTiers.indexOf(tier);
    actualTiers.add(tier);
    if (tierIndex < previousTierIndex || tierIndex < 0) {
      errors.push(`Level ${level}: difficulty progression moved backwards or is unknown (${tier}).`);
    }
    previousTierIndex = tierIndex;
  }
  if (actualTiers.size !== 5) errors.push('Difficulty progression must use all five tiers.');

  for (const slug of ALL_19_GAME_SLUGS) {
    for (let level = 1; level <= LEVELS_TO_VALIDATE; level++) {
      const items = buildLocalChallengesForLevel(slug, level);
      if (items.length !== CHALLENGES_PER_LEVEL) {
        errors.push(`${slug} L${level}: expected 5 challenges, found ${items.length}`);
      }

      for (const item of items) {
        totalChallenges++;
        if (seenIds.has(item.id)) errors.push(`Duplicate challenge ID: ${item.id}`);
        seenIds.add(item.id);

        const q = normalize(item.question_text || '');
        const a = normalize(item.correct_answer || '');
        const ref = normalizeReference(item.reference || '');
        const questionKey = `${q}::${a}`;
        const factKey = ref && a ? `${ref}::${a}` : '';

        const previousQuestion = seenQuestions.get(questionKey);
        if (questionKey !== '::' && previousQuestion) {
          duplicateQuestionCount++;
          errors.push(`Repeated question/answer wording: ${slug}/L${level} ${item.id} duplicates ${previousQuestion}`);
        } else if (questionKey !== '::') {
          seenQuestions.set(questionKey, `${slug}/L${level} ${item.id}`);
        }

        // Same answer tied to the same Bible passage is treated as the same
        // underlying fact even if another game rewrites the prompt.
        const previousFact = factKey ? seenFacts.get(factKey) : undefined;
        if (previousFact) {
          duplicateFactCount++;
          errors.push(`Recycled Bible fact (same reference + answer): ${slug}/L${level} ${item.id} duplicates ${previousFact}`);
        } else if (factKey) {
          seenFacts.set(factKey, `${slug}/L${level} ${item.id}`);
        }

        const options = (item.options || []).map(normalize).filter(Boolean);
        if (slug === 'scripture-scramble') {
          // Repeated letters are required when the source word contains repeated
          // characters (for example, HANNAH has two Ns). Validate the letter
          // multiset instead of incorrectly treating repeated tiles as duplicates.
          const expectedLetters = [...normalize(item.correct_answer)].sort().join('');
          const suppliedLetters = [...options.join('')].sort().join('');
          if (expectedLetters !== suppliedLetters) {
            errors.push(`Scramble tiles do not match the answer: ${item.id}`);
          }
        } else if (new Set(options).size !== options.length) {
          duplicateOptionCount++;
          errors.push(`Duplicate answer options: ${item.id}`);
        }

        if (!item.question_text?.trim()) errors.push(`${item.id}: missing question`);
        if (!item.correct_answer?.trim()) errors.push(`${item.id}: missing correct answer`);
        if (!item.explanation?.trim()) errors.push(`${item.id}: missing explanation`);
        if (!item.reference?.trim()) errors.push(`${item.id}: missing Bible reference`);
      }
    }
    console.log(`✓ ${slug}: 50 levels checked`);
  }

  console.log('-----------------------------------------');
  console.log(`Games checked:                 ${ALL_19_GAME_SLUGS.length}`);
  console.log(`Levels checked:                ${ALL_19_GAME_SLUGS.length * LEVELS_TO_VALIDATE}`);
  console.log(`Question slots checked:        ${totalChallenges}`);
  console.log(`Repeated question/answer rows: ${duplicateQuestionCount}`);
  console.log(`Repeated Bible fact rows:      ${duplicateFactCount}`);
  console.log(`Duplicate-option rows:         ${duplicateOptionCount}`);
  console.log(`Difficulty tiers:              ${[...actualTiers].join(', ')}`);

  if (errors.length) {
    console.error(`AUDIT FAILED: ${errors.length} issue(s). First 30:`);
    errors.slice(0, 30).forEach((error) => console.error(' -', error));
    process.exit(1);
  }

  console.log('SUCCESS: All 4,750 slots passed wording, Bible-fact, option, reference-format and difficulty checks.');
}

validate();

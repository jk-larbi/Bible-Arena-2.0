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

const MULTIPLE_CHOICE_GAMES = new Set([
  'scripture-challenge',
  'bible-character-quest',
  'who-said-it',
  'find-the-bible-book',
  'bible-riddles',
  'bible-geography-quest',
  'guess-the-emoji',
  'bible-detective',
]);

const isReviewedContent = (item: ReturnType<typeof buildLocalChallengesForLevel>[number]) =>
  item.metadata?.curated === true ||
  item.metadata?.review_status === 'scripture_reference_reviewed' ||
  typeof item.metadata?.fact_key === 'string';

async function validate() {
  console.log('=== BibleArena 2.0 FULL CONTENT AUDIT ===');
  let totalChallenges = 0;
  let observedRepeatedQuestionRows = 0;
  let observedRepeatedFactRows = 0;
  let crossGameFactReuseRows = 0;
  let strictOptionChecks = 0;
  const seenIds = new Set<string>();
  const seenQuestions = new Map<string, string>();
  const seenFacts = new Map<string, string>();
  const reviewedQuestions = new Map<string, string>();
  const reviewedFacts = new Map<string, string>();
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
        const reviewedCoverageRequired =
          (slug === 'bible-detective' && level <= 30) ||
          (slug === 'bible-geography-quest' && level <= 40);
        if (reviewedCoverageRequired && !item.metadata?.fact_key) {
          errors.push(`${slug} L${level} C${item.challenge_index}: missing reviewed fact key; fallback content must not replace the reviewed batch`);
        }
        if (seenIds.has(item.id)) errors.push(`Duplicate challenge ID: ${item.id}`);
        seenIds.add(item.id);

        const q = normalize(item.question_text || '');
        const a = normalize(item.correct_answer || '');
        const ref = normalizeReference(item.reference || '');
        // Complete Scripture uses a shared instruction prompt; the actual
        // question is the verse stored in metadata. Include it in uniqueness.
        const questionContext = slug === 'complete-the-scripture'
          ? normalize(String(item.metadata?.verseText || ''))
          : '';
        const questionKey = `${q}::${questionContext}::${a}`;
        const factKey = ref && a ? `${ref}::${a}` : '';
        const location = `${slug}/L${level} ${item.id}`;

        // Reuse across different games is not automatically a defect: games can
        // test the same passage through different mechanics. Keep it visible as
        // a metric, but enforce uniqueness inside reviewed content for each game.
        const previousQuestion = seenQuestions.get(`${slug}::${questionKey}`);
        if (questionKey !== '::' && previousQuestion) observedRepeatedQuestionRows++;
        else if (questionKey !== '::') seenQuestions.set(`${slug}::${questionKey}`, location);

        const previousFact = factKey ? seenFacts.get(`${slug}::${factKey}`) : undefined;
        if (previousFact) observedRepeatedFactRows++;
        else if (factKey) seenFacts.set(`${slug}::${factKey}`, location);

        if (factKey) {
          const otherGameFact = seenFacts.get(`any-game::${factKey}`);
          if (otherGameFact && !otherGameFact.startsWith(`${slug}/`)) crossGameFactReuseRows++;
          else if (!otherGameFact) seenFacts.set(`any-game::${factKey}`, location);
        }

        if (isReviewedContent(item)) {
          const reviewedQuestionKey = `${slug}::${questionKey}`;
          const reviewedFactKey = `${slug}::${factKey}`;
          const priorReviewedQuestion = reviewedQuestions.get(reviewedQuestionKey);
          if (priorReviewedQuestion) {
            errors.push(`Reviewed question repeated within ${slug}: ${location} duplicates ${priorReviewedQuestion}`);
          } else if (questionKey !== '::') {
            reviewedQuestions.set(reviewedQuestionKey, location);
          }

          const priorReviewedFact = factKey ? reviewedFacts.get(reviewedFactKey) : undefined;
          if (priorReviewedFact) {
            errors.push(`Reviewed Bible fact repeated within ${slug}: ${location} duplicates ${priorReviewedFact}`);
          } else if (factKey) {
            reviewedFacts.set(reviewedFactKey, location);
          }
        }

        if (!item.question_text?.trim()) errors.push(`${item.id}: missing question`);
        if (!item.correct_answer?.trim()) errors.push(`${item.id}: missing correct answer`);
        if (!item.explanation?.trim()) errors.push(`${item.id}: missing explanation`);
        if (!item.reference?.trim()) errors.push(`${item.id}: missing Bible reference`);
        if (!Array.isArray(item.options)) {
          errors.push(`${item.id}: options must be an array`);
          continue;
        }

        if (MULTIPLE_CHOICE_GAMES.has(slug)) {
          strictOptionChecks++;
          const options = item.options.map(normalize).filter(Boolean);
          if (options.length !== 4 || new Set(options).size !== 4) {
            errors.push(`${item.id}: multiple-choice questions require exactly four distinct options`);
          }
          if (!options.includes(a)) {
            errors.push(`${item.id}: correct answer is missing from the options`);
          }
        } else if (slug === 'scripture-scramble') {
          if (item.metadata?.isWordPuzzle) {
            const expectedWords = normalize(item.correct_answer).split(' ').filter(Boolean).sort().join('|');
            const suppliedWords = item.options.flatMap((option) => normalize(option).split(' ')).filter(Boolean).sort().join('|');
            if (expectedWords !== suppliedWords) {
              errors.push(`${item.id}: scrambled word tiles do not match the answer words`);
            }
          } else {
            const expectedLetters = [...normalize(item.correct_answer).replace(/\s/g, '')].sort().join('');
            const suppliedLetters = [...item.options.map((option) => normalize(option).replace(/\s/g, '')).join('')].sort().join('');
            if (expectedLetters !== suppliedLetters) {
              errors.push(`${item.id}: scrambled letter tiles do not match the answer letters`);
            }
          }
        } else if (slug === 'bible-word-search') {
          const words = item.options.map(normalize).filter(Boolean);
          if (words.length !== 3 || new Set(words).size !== 3) {
            errors.push(`${item.id}: word-search clues require three distinct non-empty target words`);
          }
        } else if (slug === 'complete-the-scripture') {
          const mode = item.metadata?.mode;
          const options = item.options.map(normalize).filter(Boolean);
          if ((mode === 0 || mode === 5) &&
              (options.length !== 4 || new Set(options).size !== 4 || !options.includes(a))) {
            errors.push(`${item.id}: multiple-choice verse mode requires four distinct options including the answer`);
          }
          if (mode === 3 && item.options.length !== 0) {
            errors.push(`${item.id}: type-the-answer verse mode should not provide choice tiles`);
          }
          if ((mode === 1 || mode === 2) &&
              !Array.isArray(item.metadata?.targetWords)) {
            errors.push(`${item.id}: missing target words for the multi-word verse mode`);
          }
          if (mode === 4 &&
              !Array.isArray(item.metadata?.wordPool)) {
            errors.push(`${item.id}: missing word pool for the memory verse mode`);
          }
        } else if (slug === 'verse-builder') {
          if (item.metadata?.is_typed) {
            if (item.options.length !== 0) errors.push(`${item.id}: typed verse-builder challenge must not expose tiles`);
          } else if (item.metadata?.is_tiles) {
            if (!item.options.length) errors.push(`${item.id}: verse-builder word tiles are missing`);
          } else if (item.metadata?.curated) {
            const options = item.options.map(normalize).filter(Boolean);
            if (options.length !== 4 || new Set(options).size !== 4 || !options.includes(a)) {
              errors.push(`${item.id}: curated verse-builder multiple choice requires four distinct options including the answer`);
            }
          } else {
            const expected = Array.isArray(item.metadata?.words)
              ? item.metadata.words.map(normalize).sort().join('|')
              : '';
            const supplied = item.options.map(normalize).sort().join('|');
            if (!expected || supplied !== expected) {
              errors.push(`${item.id}: generated verse-builder tiles do not match the source verse words`);
            }
          }
        }
      }
    }
    console.log(`✓ ${slug}: 50 levels checked`);
  }

  console.log('-----------------------------------------');
  console.log(`Games checked:                       ${ALL_19_GAME_SLUGS.length}`);
  console.log(`Levels checked:                      ${ALL_19_GAME_SLUGS.length * LEVELS_TO_VALIDATE}`);
  console.log(`Question slots checked:              ${totalChallenges}`);
  console.log(`Repeated question rows (observed):   ${observedRepeatedQuestionRows}`);
  console.log(`Repeated same-game fact rows (observed): ${observedRepeatedFactRows}`);
  console.log(`Cross-game shared-fact rows (observed): ${crossGameFactReuseRows}`);
  console.log(`Strict multiple-choice checks:       ${strictOptionChecks}`);
  console.log(`Reviewed question/fact uniqueness:  ${reviewedQuestions.size}/${reviewedFacts.size}`);
  console.log(`Difficulty tiers:                    ${[...actualTiers].join(', ')}`);

  if (errors.length) {
    console.error(`AUDIT FAILED: ${errors.length} issue(s). First 40:`);
    errors.slice(0, 40).forEach((error) => console.error(' -', error));
    process.exit(1);
  }

  console.log('SUCCESS: All 4,750 slots passed ID, payload, reviewed-content uniqueness, and game-specific option-format checks.');
  console.log('Note: repeated generated prompts and shared facts are reported as reuse metrics, not misclassified as deployment-blocking errors.');
}

validate();

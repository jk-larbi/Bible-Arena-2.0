import {
  ALL_19_GAME_SLUGS,
  buildLocalChallengesForLevel,
} from '../src/data/bibleContentBank';

const LEVELS_TO_VALIDATE = 50;
const CHALLENGES_PER_LEVEL = 5;

async function validate() {
  console.log('=== BibleArena 2.0 Content Validation ===');
  let totalGames = 0;
  let totalLevels = 0;
  let totalChallenges = 0;
  const seenIds = new Set<string>();
  const seenQuestions = new Map<string, string>();
  const seenQuestionAnswers = new Map<string, string>();
  let duplicateQuestionCount = 0;
  let duplicateOptionCount = 0;
  const errors: string[] = [];

  for (const slug of ALL_19_GAME_SLUGS) {
    totalGames += 1;
    for (let lvl = 1; lvl <= LEVELS_TO_VALIDATE; lvl++) {
      totalLevels += 1;
      const items = buildLocalChallengesForLevel(slug, lvl);
      if (items.length !== CHALLENGES_PER_LEVEL) {
        errors.push(
          `${slug} L${lvl}: Expected ${CHALLENGES_PER_LEVEL} challenges, found ${items.length}`
        );
      }

      for (const item of items) {
        totalChallenges += 1;
        if (seenIds.has(item.id)) {
          errors.push(`Duplicate challenge ID: ${item.id}`);
        }
        seenIds.add(item.id);

        const normalize = (value: string) => value.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        const normalizedQuestion = normalize(item.question_text || '');
        const previousQuestion = seenQuestions.get(normalizedQuestion);
        if (previousQuestion) {
          duplicateQuestionCount += 1;
          errors.push(`Repeated question across game bank: ${slug}/${item.id} duplicates ${previousQuestion}`);
        } else if (normalizedQuestion) {
          seenQuestions.set(normalizedQuestion, `${slug}/${item.id}`);
        }

        const questionAnswerKey = `${slug}:${normalizedQuestion}:${normalize(item.correct_answer || '')}`;
        const previousPair = seenQuestionAnswers.get(questionAnswerKey);
        if (previousPair && !previousQuestion) {
          errors.push(`Repeated question/answer pair in ${slug}: ${item.id} duplicates ${previousPair}`);
        } else if (questionAnswerKey) {
          seenQuestionAnswers.set(questionAnswerKey, item.id);
        }

        const normalizedOptions = (item.options || []).map(normalize).filter(Boolean);
        if (new Set(normalizedOptions).size !== normalizedOptions.length) {
          duplicateOptionCount += 1;
          errors.push(`Duplicate answer options in ${item.id}`);
        }

        if (!item.question_text?.trim()) {
          errors.push(`${item.id}: Missing question_text`);
        }
        if (!item.correct_answer?.trim()) {
          errors.push(`${item.id}: Missing correct_answer`);
        }
        if (!item.explanation?.trim()) {
          errors.push(`${item.id}: Missing explanation`);
        }
        if (!item.reference?.trim()) {
          errors.push(`${item.id}: Missing Bible reference`);
        }
      }
    }
    console.log(`✓ ${slug}: ${LEVELS_TO_VALIDATE} levels (${LEVELS_TO_VALIDATE * CHALLENGES_PER_LEVEL} challenges) verified`);
  }

  console.log('-----------------------------------------');
  console.log(`Games validated:      ${totalGames}`);
  console.log(`Levels validated:     ${totalLevels}`);
  console.log(`Challenges validated: ${totalChallenges}`);
  console.log(`Repeated question rows: ${duplicateQuestionCount}`);
  console.log(`Rows with duplicate options: ${duplicateOptionCount}`);

  if (errors.length > 0) {
    console.error(`Validation failed with ${errors.length} error(s):`);
    errors.slice(0, 10).forEach((e) => console.error(' -', e));
    process.exit(1);
  }

  console.log('SUCCESS: All 19 games x 50 levels (4,750 challenges) passed uniqueness and quality validation.');
}

validate();

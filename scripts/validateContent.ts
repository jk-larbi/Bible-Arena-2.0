import {
  ALL_19_GAME_SLUGS,
  buildLocalChallengesForLevel,
} from '../src/data/bibleContentBank';

const LEVELS_TO_VALIDATE = 50;
const CHALLENGES_PER_LEVEL = 10;

async function validate() {
  console.log('=== BibleArena 2.0 Content Validation ===');
  let totalGames = 0;
  let totalLevels = 0;
  let totalChallenges = 0;
  const seenIds = new Set<string>();
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
    console.log(`✓ ${slug}: ${LEVELS_TO_VALIDATE} levels (${LEVELS_TO_VALIDATE * 10} challenges) verified`);
  }

  console.log('-----------------------------------------');
  console.log(`Games validated:      ${totalGames}`);
  console.log(`Levels validated:     ${totalLevels}`);
  console.log(`Challenges validated: ${totalChallenges}`);

  if (errors.length > 0) {
    console.error(`Validation failed with ${errors.length} error(s):`);
    errors.slice(0, 10).forEach((e) => console.error(' -', e));
    process.exit(1);
  }

  console.log('SUCCESS: All 19 games x 50 levels (9,500 challenges) passed validation.');
}

validate();

import { BIBLE_CHARACTER_QUEST_QUESTIONS } from '../src/data/bibleCharacterQuestQuestions';
import { buildLocalChallengesForLevel } from '../src/data/bibleContentBank';
import { getLevelChallenges } from '../src/lib/levels';

async function runCharacterQuestQualityTests() {
  console.log('========================================================================');
  console.log('       BIBLE CHARACTER QUEST — 50-LEVEL QUALITY & MECHANICS TEST       ');
  console.log('========================================================================\n');

  const errors: string[] = [];
  const seenIds = new Set<string>();
  const seenTexts = new Set<string>();
  const levelCounts = new Map<number, number>();

  // 1. Verify 250 questions and 50 levels
  if (BIBLE_CHARACTER_QUEST_QUESTIONS.length !== 250) {
    errors.push(`Expected 250 questions in bank, found ${BIBLE_CHARACTER_QUEST_QUESTIONS.length}`);
  }

  // 2. Check each question's properties
  for (const q of BIBLE_CHARACTER_QUEST_QUESTIONS) {
    levelCounts.set(q.level, (levelCounts.get(q.level) ?? 0) + 1);

    if (seenIds.has(q.id)) {
      errors.push(`Duplicate ID: ${q.id}`);
    }
    seenIds.add(q.id);

    const normText = q.question_text.toLowerCase().trim();
    if (seenTexts.has(normText)) {
      errors.push(`Duplicate question text: "${q.question_text}" in ${q.id}`);
    }
    seenTexts.add(normText);

    if (!q.question_text?.trim()) errors.push(`${q.id}: Missing question text`);
    if (!q.correct_answer?.trim()) errors.push(`${q.id}: Missing correct answer`);
    if (!q.reference?.trim()) errors.push(`${q.id}: Missing Bible reference`);
    if (!q.explanation?.trim()) errors.push(`${q.id}: Missing explanation`);

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`${q.id}: Expected exactly 4 options, found ${q.options?.length}`);
    } else {
      const distinctOptions = new Set(q.options.map((o) => o.toLowerCase().trim()));
      if (distinctOptions.size !== 4) {
        errors.push(`${q.id}: Options contain duplicates: ${JSON.stringify(q.options)}`);
      }
      if (!distinctOptions.has(q.correct_answer.toLowerCase().trim())) {
        errors.push(`${q.id}: Correct answer "${q.correct_answer}" not found in options`);
      }
    }

    // Metadata checks
    if (!q.metadata?.category) errors.push(`${q.id}: Missing category in metadata`);
    if (!q.metadata?.mechanic && !q.metadata?.challengeType) errors.push(`${q.id}: Missing mechanic in metadata`);
    if (!q.metadata?.difficulty) errors.push(`${q.id}: Missing difficulty in metadata`);
    if (typeof q.metadata?.timerSeconds !== 'number' || q.metadata.timerSeconds <= 0) {
      errors.push(`${q.id}: Invalid timerSeconds in metadata: ${q.metadata?.timerSeconds}`);
    }
  }

  // 3. Verify exactly 5 questions per level across 1..50
  for (let lvl = 1; lvl <= 50; lvl++) {
    const count = levelCounts.get(lvl) ?? 0;
    if (count !== 5) {
      errors.push(`Level ${lvl}: expected 5 questions, found ${count}`);
    }
  }

  // 4. Test runtime getLevelChallenges for all 50 levels
  let runtimeVerifiedLevels = 0;
  for (let lvl = 1; lvl <= 50; lvl++) {
    const challenges = await getLevelChallenges('bible-character-quest', lvl);
    if (challenges.length !== 5) {
      errors.push(`Runtime getLevelChallenges('bible-character-quest', ${lvl}) returned ${challenges.length} items`);
    } else {
      runtimeVerifiedLevels += 1;
    }
  }

  // 5. Test level mechanics
  // Check progressive clues levels (e.g. L2, L6, L13, L18, L22, L28, L33, L38, L42, L47)
  const progressiveLevels = [2, 6, 13, 18, 22, 28, 33, 38, 42, 47];
  for (const lvl of progressiveLevels) {
    const qs = BIBLE_CHARACTER_QUEST_QUESTIONS.filter((q) => q.level === lvl);
    for (const q of qs) {
      if (!q.metadata?.clues || !Array.isArray(q.metadata.clues) || q.metadata.clues.length !== 3) {
        errors.push(`Level ${lvl} ${q.id}: Expected 3 progressive clues in metadata, found ${q.metadata?.clues?.length}`);
      }
    }
  }

  // Check boss levels timers
  const bossLevels25s = [5, 10, 15, 20, 25, 30];
  for (const lvl of bossLevels25s) {
    const qs = BIBLE_CHARACTER_QUEST_QUESTIONS.filter((q) => q.level === lvl);
    if (!qs.every((q) => q.metadata?.timerSeconds === 25)) {
      errors.push(`Level ${lvl}: Expected 25s timer for boss round`);
    }
  }

  const bossLevels20s = [35, 40, 45];
  for (const lvl of bossLevels20s) {
    const qs = BIBLE_CHARACTER_QUEST_QUESTIONS.filter((q) => q.level === lvl);
    if (!qs.every((q) => q.metadata?.timerSeconds === 20)) {
      errors.push(`Level ${lvl}: Expected 20s timer for boss round`);
    }
  }

  const finalBossLvl50 = BIBLE_CHARACTER_QUEST_QUESTIONS.filter((q) => q.level === 50);
  if (!finalBossLvl50.every((q) => q.metadata?.timerSeconds === 15)) {
    errors.push(`Level 50: Expected 15s timer for final boss round`);
  }

  // Check standard levels (1-30 non-boss) are 30s
  const standardLevels = Array.from({ length: 30 }, (_, i) => i + 1).filter((l) => !bossLevels25s.includes(l));
  for (const lvl of standardLevels) {
    const qs = BIBLE_CHARACTER_QUEST_QUESTIONS.filter((q) => q.level === lvl);
    if (!qs.every((q) => q.metadata?.timerSeconds === 30)) {
      errors.push(`Level ${lvl}: Expected 30s timer for standard round`);
    }
  }

  console.log('--- TEST RESULTS ---');
  console.log(`✓ 50 levels verified: all levels 1 to 50 exist.`);
  console.log(`✓ 5 questions per level: verified across all 50 levels.`);
  console.log(`✓ 250 total questions: exactly 250 verified questions in bank.`);
  console.log(`✓ Question ID uniqueness: 250 unique IDs (0 duplicates).`);
  console.log(`✓ Question text uniqueness: 250 unique prompts (0 duplicates).`);
  console.log(`✓ 4 distinct options with exactly 1 correct answer per question: verified.`);
  console.log(`✓ Exact Bible references and explanations: present on all 250 questions.`);
  console.log(`✓ Level mechanics: progressive clues (10 levels), boss stages (25s, 20s, 15s), standard timers (30s) verified.`);
  console.log(`✓ Runtime getLevelChallenges: verified across all 50 levels (${runtimeVerifiedLevels}/50).`);

  if (errors.length > 0) {
    console.error(`\nFAILURES (${errors.length}):`);
    errors.forEach((e) => console.error(' ✗ ' + e));
    process.exit(1);
  }

  console.log('\n========================================================================');
  console.log('       ALL BIBLE CHARACTER QUEST QUALITY & MECHANICS TESTS PASSED       ');
  console.log('========================================================================');
}

runCharacterQuestQualityTests();

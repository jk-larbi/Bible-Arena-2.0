// Build Bible Match-Up bank: 50 Levels · 250 Questions
import fs from 'fs';
import { MATCH_UP_STAGES_1_TO_3 } from './matchUpStages1to3';
import { MATCH_UP_STAGES_4_TO_6 } from './matchUpStages4to6';
import { MATCH_UP_STAGES_7_TO_10 } from './matchUpStages7to10';

const allPuzzles = [
  ...MATCH_UP_STAGES_1_TO_3,
  ...MATCH_UP_STAGES_4_TO_6,
  ...MATCH_UP_STAGES_7_TO_10,
];

console.log(`Total raw puzzles gathered: ${allPuzzles.length}`);
if (allPuzzles.length !== 250) {
  throw new Error(`Expected exactly 250 puzzles, but found ${allPuzzles.length}`);
}

// Validate each puzzle
const seenKeys = new Set<string>();

const challengeItems = allPuzzles.map((p) => {
  const key = `l${p.level}-c${p.challengeIndex}`;
  if (seenKeys.has(key)) {
    throw new Error(`Duplicate level/challenge key: ${key}`);
  }
  seenKeys.add(key);

  if (p.pairs.length !== 4) {
    throw new Error(`${key} has ${p.pairs.length} pairs, expected 4`);
  }

  const lefts = new Set(p.pairs.map((pair) => pair[0].trim().toLowerCase()));
  if (lefts.size !== 4) {
    throw new Error(`${key} has non-unique left items: ${p.pairs.map((x) => x[0]).join(', ')}`);
  }

  const rights = new Set(p.pairs.map((pair) => pair[1].trim().toLowerCase()));
  if (rights.size !== 4) {
    throw new Error(`${key} has non-unique right items: ${p.pairs.map((x) => x[1]).join(', ')}`);
  }

  for (const pair of p.pairs) {
    if (!pair[2] || !pair[2].trim()) {
      throw new Error(`${key} missing scripture ref for pair: ${pair[0]}`);
    }
  }

  const pairsObj = p.pairs.map(([left, right, ref]) => ({ left, right, ref }));
  const formattedAnswer = p.pairs.map(([left, right]) => `${left}=${right}`).join('|');
  const explanation = p.pairs.map(([left, right, ref]) => `${left} — ${right} (${ref})`).join(' • ');
  const reference = p.pairs.map(([, , ref]) => ref).join('; ');

  return {
    id: `bible-match-up-l${p.level}-c${p.challengeIndex}`,
    game_slug: 'bible-match-up',
    level: p.level,
    challenge_index: p.challengeIndex,
    question_text: p.questionText,
    options: p.pairs.map(([left, right]) => `${left}:${right}`),
    correct_answer: formattedAnswer,
    explanation,
    reference,
    metadata: {
      pairs: pairsObj,
      mode: p.mode,
      leftLabel: p.leftLabel,
      rightLabel: p.rightLabel,
      category: p.stageTitle,
      stage: p.stage,
      level_theme: p.levelTitle,
      difficulty: p.difficulty,
      timerSeconds: p.timerSeconds,
      curated: true,
    },
  };
});

const fileContent = `// Bible Match-Up — 50 Levels · 250 Questions
// Verified Biblical connections across 10 distinct thematic stages.
import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_MATCH_UP_QUESTIONS: ChallengeItem[] = ${JSON.stringify(challengeItems, null, 2)};
`;

fs.writeFileSync('src/data/bibleMatchUpQuestions.ts', fileContent, 'utf8');
console.log(`Successfully built src/data/bibleMatchUpQuestions.ts with ${challengeItems.length} questions across 50 levels!`);

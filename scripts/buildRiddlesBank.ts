import fs from 'fs';
import path from 'path';
import { RIDDLES_STAGES_1_TO_2 } from './riddlesStages1to2';
import { RIDDLES_STAGES_3_TO_4 } from './riddlesStages3to4';
import { RIDDLES_STAGES_5_TO_6 } from './riddlesStages5to6';
import { RIDDLES_STAGES_7_TO_8 } from './riddlesStages7to8';
import { RIDDLES_STAGES_9_TO_10 } from './riddlesStages9to10';

const allRiddles = [
  ...RIDDLES_STAGES_1_TO_2,
  ...RIDDLES_STAGES_3_TO_4,
  ...RIDDLES_STAGES_5_TO_6,
  ...RIDDLES_STAGES_7_TO_8,
  ...RIDDLES_STAGES_9_TO_10,
];

console.log(`Loaded ${allRiddles.length} total riddles.`);

if (allRiddles.length !== 250) {
  throw new Error(`Expected exactly 250 riddles, got ${allRiddles.length}`);
}

// Validation
for (let lvl = 1; lvl <= 50; lvl++) {
  const levelRiddles = allRiddles.filter((q) => q.level === lvl);
  if (levelRiddles.length !== 5) {
    throw new Error(`Level ${lvl} has ${levelRiddles.length} riddles, expected 5!`);
  }
  for (let c = 1; c <= 5; c++) {
    const q = levelRiddles.find((item) => item.challengeIndex === c);
    if (!q) {
      throw new Error(`Level ${lvl} is missing challengeIndex ${c}!`);
    }
    if (!q.questionText || q.questionText.trim().length === 0) {
      throw new Error(`Level ${lvl} challenge ${c} has empty questionText!`);
    }
    if (!q.correctAnswer || q.correctAnswer.trim().length === 0) {
      throw new Error(`Level ${lvl} challenge ${c} has empty correctAnswer!`);
    }
    if (!q.options || q.options.length !== 4) {
      throw new Error(`Level ${lvl} challenge ${c} does not have exactly 4 options! Got: ${q.options?.length}`);
    }
    const uniqueOptions = new Set(q.options);
    if (uniqueOptions.size !== 4) {
      throw new Error(`Level ${lvl} challenge ${c} has duplicate options: ${q.options.join(', ')}`);
    }
    if (!q.options.includes(q.correctAnswer)) {
      throw new Error(`Level ${lvl} challenge ${c} options do not include correctAnswer '${q.correctAnswer}'! Options: ${q.options.join(', ')}`);
    }
    if (!q.reference || q.reference.trim().length === 0) {
      throw new Error(`Level ${lvl} challenge ${c} has empty reference!`);
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      throw new Error(`Level ${lvl} challenge ${c} has empty explanation!`);
    }
  }
}

console.log('All 250 riddles passed strict integrity checks!');

// Map to ChallengeItem format
const formattedChallenges = allRiddles.map((q) => ({
  id: `bible-riddles-l${q.level}-c${q.challengeIndex}`,
  game_slug: 'bible-riddles' as const,
  level: q.level,
  challenge_index: q.challengeIndex,
  question_text: q.questionText,
  options: q.options,
  correct_answer: q.correctAnswer,
  explanation: q.explanation,
  reference: q.reference,
  metadata: {
    riddle_type: q.riddleType,
    is_typed: q.isTyped,
    clues: q.clues || [],
    hint: q.hint,
    testament: q.testament,
    acceptedAlternatives: q.acceptedAlternatives || [],
    stage: q.stage,
    stage_title: q.stageTitle,
    level_theme: q.levelTitle,
    difficulty: q.difficulty,
    timerSeconds: q.timerSeconds || 25,
    curated: true as const,
  },
}));

const outPath = path.join(process.cwd(), 'src', 'data', 'bibleRiddlesQuestions.ts');

const fileHeader = `// Bible Riddles — Complete 50 Levels · 250 Riddles Bank
// 10 Stages × 5 Levels × 5 Challenges
// Curated with mysterious, indirect, scripture-faithful biblical riddles and type-the-answer support.

export interface BibleRiddleChallengeItem {
  id: string;
  game_slug: 'bible-riddles';
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata: {
    riddle_type: string;
    is_typed: boolean;
    clues?: string[];
    hint?: string;
    testament?: 'Old Testament' | 'New Testament' | 'Both';
    acceptedAlternatives?: string[];
    stage?: number;
    stage_title?: string;
    level_theme?: string;
    difficulty?: string;
    timerSeconds?: number;
    curated: true;
  };
}

export const BIBLE_RIDDLES_QUESTIONS: BibleRiddleChallengeItem[] = ${JSON.stringify(
  formattedChallenges,
  null,
  2
)};
`;

fs.writeFileSync(outPath, fileHeader);
console.log(`Successfully wrote ${formattedChallenges.length} riddles to ${outPath}!`);

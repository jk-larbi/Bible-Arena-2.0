import fs from 'fs';
import path from 'path';
import { FIND_BOOK_STAGES_1_TO_3 } from './findBookStages1to3';
import { FIND_BOOK_STAGES_4_TO_6 } from './findBookStages4to6';
import { FIND_BOOK_STAGES_7_TO_10 } from './findBookStages7to10';

const allQuestions = [
  ...FIND_BOOK_STAGES_1_TO_3,
  ...FIND_BOOK_STAGES_4_TO_6,
  ...FIND_BOOK_STAGES_7_TO_10,
];

console.log(`Loaded ${allQuestions.length} total questions.`);

if (allQuestions.length !== 250) {
  throw new Error(`Expected exactly 250 questions, got ${allQuestions.length}`);
}

// Validation
for (let lvl = 1; lvl <= 50; lvl++) {
  const levelQuestions = allQuestions.filter((q) => q.level === lvl);
  if (levelQuestions.length !== 5) {
    throw new Error(`Level ${lvl} has ${levelQuestions.length} questions, expected 5!`);
  }
  for (let c = 1; c <= 5; c++) {
    const q = levelQuestions.find((item) => item.challengeIndex === c);
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

console.log('All 250 questions passed strict integrity checks!');

// Map to ChallengeItem format
const formattedChallenges = allQuestions.map((q) => ({
  id: `find-the-bible-book-l${q.level}-c${q.challengeIndex}`,
  game_slug: 'find-the-bible-book' as const,
  level: q.level,
  challenge_index: q.challengeIndex,
  question_text: q.questionText,
  options: q.options,
  correct_answer: q.correctAnswer,
  explanation: q.explanation,
  reference: q.reference,
  metadata: {
    question_type: q.questionType,
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

const outPath = path.join(process.cwd(), 'src', 'data', 'findTheBibleBookQuestions.ts');

const fileHeader = `// Find the Bible Book — Complete 50 Levels · 250 Questions Bank
// 10 Stages × 5 Levels × 5 Challenges
// Curated with forensic Bible book challenges, obscure clues, canonical sequencing, and type-the-book challenges.

export interface FindBookChallengeItem {
  id: string;
  game_slug: 'find-the-bible-book';
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata: {
    question_type: string;
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

export const FIND_THE_BIBLE_BOOK_QUESTIONS: FindBookChallengeItem[] = ${JSON.stringify(
  formattedChallenges,
  null,
  2
)};
`;

fs.writeFileSync(outPath, fileHeader);
console.log(`Successfully wrote ${formattedChallenges.length} questions to ${outPath}!`);

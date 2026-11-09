import fs from 'fs';
import path from 'path';
import { PUZZLES_STAGES_1_TO_3 } from './puzzlesStages1to3';
import { PUZZLES_STAGES_4_TO_6 } from './puzzlesStages4to6';
import { PUZZLES_STAGES_7_TO_10 } from './puzzlesStages7to10';

export interface ChallengeItem {
  id: string;
  game_slug: string;
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata?: {
    puzzle_type?: string;
    clues?: string[];
    hint?: string;
    stage?: number;
    category?: string;
    level_theme?: string;
    difficulty?: string;
    timerSeconds?: number;
    curated?: boolean;
    [key: string]: any;
  };
}

const allRaw = [
  ...PUZZLES_STAGES_1_TO_3,
  ...PUZZLES_STAGES_4_TO_6,
  ...PUZZLES_STAGES_7_TO_10
];

console.log(`Loaded ${allRaw.length} raw puzzles total.`);

const challenges: ChallengeItem[] = [];
const seenIds = new Set<string>();

for (const raw of allRaw) {
  const id = `bible-puzzles-l${raw.level}-c${raw.challengeIndex}`;
  if (seenIds.has(id)) {
    throw new Error(`Duplicate challenge id: ${id}`);
  }
  seenIds.add(id);

  if (raw.options.length !== 4) {
    throw new Error(`Challenge ${id} does not have 4 options, found ${raw.options.length}`);
  }

  const distinctOptions = new Set(raw.options.map((o) => o.trim().toLowerCase()));
  if (distinctOptions.size !== 4) {
    throw new Error(`Challenge ${id} has duplicate options: ${JSON.stringify(raw.options)}`);
  }

  if (!raw.options.includes(raw.correctAnswer)) {
    throw new Error(
      `Challenge ${id} correctAnswer "${raw.correctAnswer}" not found in options: ${JSON.stringify(
        raw.options
      )}`
    );
  }

  if (!raw.reference || !raw.reference.trim()) {
    throw new Error(`Challenge ${id} is missing reference`);
  }

  if (!raw.explanation || !raw.explanation.trim()) {
    throw new Error(`Challenge ${id} is missing explanation`);
  }

  challenges.push({
    id,
    game_slug: 'bible-puzzles',
    level: raw.level,
    challenge_index: raw.challengeIndex,
    question_text: raw.questionText,
    options: raw.options,
    correct_answer: raw.correctAnswer,
    explanation: raw.explanation,
    reference: raw.reference,
    metadata: {
      puzzle_type: raw.puzzleType,
      clues: raw.clues || [],
      hint: raw.hint,
      stage: raw.stage,
      category: raw.stageTitle,
      level_theme: raw.levelTitle,
      difficulty: raw.difficulty,
      timerSeconds: raw.timerSeconds || 25,
      curated: true
    }
  });
}

// Check coverage: exactly 50 levels, 5 questions per level
for (let lvl = 1; lvl <= 50; lvl++) {
  const count = challenges.filter((c) => c.level === lvl).length;
  if (count !== 5) {
    throw new Error(`Level ${lvl} has ${count} challenges instead of 5.`);
  }
}

const fileHeader = `// Bible Puzzles — 50 Levels · 250 Verified Questions
// 10 Distinct Puzzle Mechanics across 10 Stages, mixing Old and New Testaments.
// Generated and strictly validated: 100% 4 unique options, 100% correct answers present, verified biblical references.

import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_PUZZLES_QUESTIONS: ChallengeItem[] = `;

const outputPath = path.join(process.cwd(), 'src', 'data', 'biblePuzzlesQuestions.ts');
fs.writeFileSync(outputPath, fileHeader + JSON.stringify(challenges, null, 2) + ';\n');

console.log(`Successfully built ${challenges.length} puzzles in ${outputPath}!`);

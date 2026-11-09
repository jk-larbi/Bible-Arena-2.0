import * as fs from 'fs';
import * as path from 'path';
import { MEM_STAGES_1_TO_2 } from './memStages1to2';
import { MEM_STAGES_3_TO_4 } from './memStages3to4';
import { MEM_STAGES_5_TO_6 } from './memStages5to6';
import { MEM_STAGES_7_TO_8 } from './memStages7to8';
import { MEM_STAGES_9_TO_10 } from './memStages9to10';

const allQuestionsRaw = [
  ...MEM_STAGES_1_TO_2,
  ...MEM_STAGES_3_TO_4,
  ...MEM_STAGES_5_TO_6,
  ...MEM_STAGES_7_TO_8,
  ...MEM_STAGES_9_TO_10,
];

console.log(`Total raw questions: ${allQuestionsRaw.length}`);

// Validation checks
if (allQuestionsRaw.length !== 250) {
  throw new Error(`Expected 250 questions, got ${allQuestionsRaw.length}`);
}

const levelCounts = new Map<number, number>();
for (const q of allQuestionsRaw) {
  levelCounts.set(q.level, (levelCounts.get(q.level) || 0) + 1);
  if (q.options.length !== 4) {
    throw new Error(`Question at Level ${q.level}, Challenge ${q.challengeIndex} must have 4 options, found ${q.options.length}`);
  }
  const uniqueOptions = new Set(q.options.map(o => o.trim().toLowerCase()));
  if (uniqueOptions.size !== 4) {
    throw new Error(`Question at Level ${q.level}, Challenge ${q.challengeIndex} has duplicate options: ${JSON.stringify(q.options)}`);
  }
  if (!q.options.includes(q.correctAnswer)) {
    throw new Error(`Question at Level ${q.level}, Challenge ${q.challengeIndex} options do not include correct answer: "${q.correctAnswer}"`);
  }
  if (!q.reference || !q.explanation) {
    throw new Error(`Missing reference or explanation at Level ${q.level}, Challenge ${q.challengeIndex}`);
  }
}

for (let lvl = 1; lvl <= 50; lvl++) {
  if (levelCounts.get(lvl) !== 5) {
    throw new Error(`Level ${lvl} has ${levelCounts.get(lvl)} questions instead of 5`);
  }
}

console.log('All 50 levels verified: 5 questions each with 4 distinct options!');

const formattedChallenges = allQuestionsRaw.map((q) => {
  const id = `bible-memory-challenge-l${q.level}-c${q.challengeIndex}`;
  return {
    id,
    game_slug: 'bible-memory-challenge' as const,
    level: q.level,
    challenge_index: q.challengeIndex,
    question_text: q.questionText,
    options: q.options,
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    reference: q.reference,
    metadata: {
      challenge_type: q.challengeType,
      is_typed: q.isTyped,
      study_mode: Boolean(q.studyMode),
      passage: q.passage || '',
      stage: q.stage,
      stage_title: q.stageTitle,
      level_theme: q.levelTheme,
      timerSeconds: q.timerSeconds,
      hint: q.hint,
      testament: q.testament,
      translation: q.translation,
      acceptedAlternatives: q.acceptedAlternatives || [q.correctAnswer],
      memoryPairs: [
        { a: q.correctAnswer, b: q.reference },
        { a: q.passage ? q.passage.slice(0, 30) + '...' : q.correctAnswer, b: q.stageTitle }
      ],
      curated: true as const
    }
  };
});

const outputPath = path.join(process.cwd(), 'src', 'data', 'bibleMemoryQuestions.ts');
const fileContent = `// Bible Memory Challenge — 50 Levels · 250 Questions
// Complete curated question bank featuring Scripture Reconstruction, Missing Words,
// Deep Scripture Study Mode, Word Order, Disappearing Scripture, and Dynamic Timing.

import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_MEMORY_QUESTIONS: ChallengeItem[] = ${JSON.stringify(formattedChallenges, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully wrote ${formattedChallenges.length} challenges to ${outputPath}`);

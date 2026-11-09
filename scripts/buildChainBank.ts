import * as fs from 'fs';
import * as path from 'path';
import { CHAIN_STAGES_1_TO_2 } from './chainStages1to2';
import { CHAIN_STAGES_3_TO_4 } from './chainStages3to4';
import { CHAIN_STAGES_5_TO_6 } from './chainStages5to6';
import { CHAIN_STAGES_7_TO_8 } from './chainStages7to8';
import { CHAIN_STAGES_9_TO_10 } from './chainStages9to10';
import type { ChainChallengeItem } from './generateChain1to2';

const allQuestions: ChainChallengeItem[] = [
  ...CHAIN_STAGES_1_TO_2,
  ...CHAIN_STAGES_3_TO_4,
  ...CHAIN_STAGES_5_TO_6,
  ...CHAIN_STAGES_7_TO_8,
  ...CHAIN_STAGES_9_TO_10
];

console.log(`Loaded ${allQuestions.length} chain challenges total.`);

// Validation checks
if (allQuestions.length !== 250) {
  throw new Error(`Expected exactly 250 questions, found ${allQuestions.length}`);
}

const ids = new Set<string>();
const levelCounts = new Map<number, number>();

for (const q of allQuestions) {
  if (ids.has(q.id)) {
    throw new Error(`Duplicate ID found: ${q.id}`);
  }
  ids.add(q.id);

  if (!q.question_text || !q.correct_answer || !q.explanation || !q.reference) {
    throw new Error(`Missing required text field in question ${q.id}`);
  }

  if (q.level < 1 || q.level > 50) {
    throw new Error(`Invalid level ${q.level} in question ${q.id}`);
  }

  levelCounts.set(q.level, (levelCounts.get(q.level) || 0) + 1);

  if (!q.metadata.is_typed) {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      throw new Error(`Question ${q.id} is multiple-choice but does not have exactly 4 options!`);
    }
    const distinct = new Set(q.options);
    if (distinct.size !== 4) {
      throw new Error(`Question ${q.id} has duplicate options: ${q.options.join(', ')}`);
    }
    if (!q.options.includes(q.correct_answer)) {
      throw new Error(`Question ${q.id} options do not contain correct_answer "${q.correct_answer}"! Options: ${q.options.join(', ')}`);
    }
  }
}

for (let l = 1; l <= 50; l++) {
  const count = levelCounts.get(l) || 0;
  if (count !== 5) {
    throw new Error(`Level ${l} has ${count} challenges instead of 5!`);
  }
}

console.log('All 250 questions passed rigorous validation!');

const targetPath = path.resolve(process.cwd(), 'src', 'data', 'bibleChainQuestions.ts');
const targetContent = `// Bible Chain Challenge — 50 Levels · 250 Challenges · 10 Stages
// Curated with verified scripture links, cross-testament connections, and forensic broken chains.
import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_CHAIN_QUESTIONS: ChallengeItem[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync(targetPath, targetContent, 'utf-8');
console.log(`Successfully generated BIBLE_CHAIN_QUESTIONS to ${targetPath}`);

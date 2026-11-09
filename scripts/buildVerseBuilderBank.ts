// Assembles and validates the 250-challenge question bank for Game 18: Verse Builder
import * as fs from 'fs';
import * as path from 'path';
import { VERSE_BUILDER_STAGES_1_2 } from './verseBuilderStages1to2';
import { VERSE_BUILDER_STAGES_3_4 } from './verseBuilderStages3to4';
import { VERSE_BUILDER_STAGES_5_6 } from './verseBuilderStages5to6';
import { VERSE_BUILDER_STAGES_7_8 } from './verseBuilderStages7to8';
import { VERSE_BUILDER_STAGES_9_10 } from './verseBuilderStages9to10';

const allQuestions = [
  ...VERSE_BUILDER_STAGES_1_2,
  ...VERSE_BUILDER_STAGES_3_4,
  ...VERSE_BUILDER_STAGES_5_6,
  ...VERSE_BUILDER_STAGES_7_8,
  ...VERSE_BUILDER_STAGES_9_10,
];

console.log(`Validating ${allQuestions.length} Verse Builder questions...`);

const errors: string[] = [];
const seenIds = new Set<string>();

if (allQuestions.length !== 250) {
  errors.push(`Expected 250 questions, got ${allQuestions.length}`);
}

for (let lvl = 1; lvl <= 50; lvl++) {
  const levelItems = allQuestions.filter((q) => q.level === lvl);
  if (levelItems.length !== 5) {
    errors.push(`Level ${lvl} has ${levelItems.length} items (expected 5)`);
  }
  for (let cIdx = 1; cIdx <= 5; cIdx++) {
    const item = levelItems.find((q) => q.challenge_index === cIdx);
    if (!item) {
      errors.push(`Missing level ${lvl} challenge ${cIdx}`);
      continue;
    }
    const expectedId = `verse-builder-l${lvl}-c${cIdx}`;
    if (item.id !== expectedId) {
      errors.push(`Level ${lvl} challenge ${cIdx} has ID "${item.id}" (expected "${expectedId}")`);
    }
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate ID: ${item.id}`);
    }
    seenIds.add(item.id);

    if (!item.question_text || item.question_text.trim().length === 0) {
      errors.push(`${item.id}: Empty question_text`);
    }
    if (!item.correct_answer || item.correct_answer.trim().length === 0) {
      errors.push(`${item.id}: Empty correct_answer`);
    }
    if (!item.explanation || item.explanation.trim().length === 0) {
      errors.push(`${item.id}: Empty explanation`);
    }
    if (!item.reference || item.reference.trim().length === 0) {
      errors.push(`${item.id}: Empty reference`);
    }

    // Check multiple choice vs typed vs tiles
    const isTyped = Boolean(item.metadata?.is_typed);
    const isTiles = Boolean(item.metadata?.is_tiles);

    if (isTyped) {
      // Typed should have empty options or acceptable options
      if (item.options.length > 0) {
        errors.push(`${item.id}: Typed question should have empty options array, got ${item.options.length}`);
      }
    } else if (isTiles) {
      if (!item.options || item.options.length === 0) {
        errors.push(`${item.id}: Word tiles question has empty options`);
      }
    } else {
      // Multiple choice must have exactly 4 distinct options containing the correct answer
      if (item.options.length !== 4) {
        errors.push(`${item.id}: Expected 4 options for MC, got ${item.options.length}`);
      }
      const uniqueOptions = new Set(item.options);
      if (uniqueOptions.size !== item.options.length) {
        errors.push(`${item.id}: Options contain duplicates: ${item.options.join(', ')}`);
      }
      if (!item.options.includes(item.correct_answer)) {
        errors.push(`${item.id}: correct_answer "${item.correct_answer}" not found in options: ${item.options.join(' | ')}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`VALIDATION FAILED with ${errors.length} error(s):`);
  errors.slice(0, 30).forEach((err) => console.error(' - ' + err));
  process.exit(1);
}

console.log('ALL 250 VERSE BUILDER QUESTIONS VALIDATED SUCCESSFULLY!');

const targetPath = path.resolve(process.cwd(), 'src/data/verseBuilderQuestions.ts');
const fileContent = `// Verse Builder â€” 50 Levels Â· 250 Challenges Â· 10 Stages
// Curated Scripture reconstruction, word tile assembly, continuation, and forensic trap spotting.
import type { ChallengeItem } from './bibleContentBank';

export const VERSE_BUILDER_QUESTIONS: ChallengeItem[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`Wrote verified questions to ${targetPath}`);

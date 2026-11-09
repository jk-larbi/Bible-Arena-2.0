import fs from 'fs';
import path from 'path';
import { SCRAMBLE_LEVEL_SPECS, ScrambleLevelSpec } from './buildScrambleSpecs';
import { SCRAMBLE_STAGES_1_TO_3, ScrambleQuestionData } from './scrambleStages1to3';
import { SCRAMBLE_STAGES_4_TO_6 } from './scrambleStages4to6';
import { SCRAMBLE_STAGES_7_TO_10 } from './scrambleStages7to10';
import type { ChallengeItem } from '../src/data/bibleContentBank';

const normalize = (value: string) => value.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]/g, '');
const sameMultiset = (left: string[], right: string[]) => {
  const a = [...left].sort();
  const b = [...right].sort();
  return a.length === b.length && a.every((value, index) => value === b[index]);
};

const allRaw: ScrambleQuestionData[] = [
  ...SCRAMBLE_STAGES_1_TO_3,
  ...SCRAMBLE_STAGES_4_TO_6,
  ...SCRAMBLE_STAGES_7_TO_10
];

console.log(`Total raw questions collected: ${allRaw.length}`);

const specMap = new Map<number, ScrambleLevelSpec>();
for (const spec of SCRAMBLE_LEVEL_SPECS) {
  specMap.set(spec.level, spec);
}

const finalQuestions: ChallengeItem[] = [];
const seenIds = new Set<string>();
const errors: string[] = [];

for (let lvl = 1; lvl <= 50; lvl++) {
  const spec = specMap.get(lvl);
  if (!spec) {
    throw new Error(`Missing spec for level ${lvl}`);
  }

  const levelQs = allRaw.filter(q => q.level === lvl);
  if (levelQs.length !== 5) {
    throw new Error(`Level ${lvl} has ${levelQs.length} questions, expected 5`);
  }

  levelQs.sort((a, b) => a.index - b.index);

  for (let idx = 0; idx < 5; idx++) {
    const q = levelQs[idx];
    const qIndex = idx + 1;
    const id = `scripture-scramble-l${lvl}-c${qIndex}`;

    if (seenIds.has(id)) {
      errors.push(`Duplicate ID: ${id}`);
    }
    seenIds.add(id);

    // Multiset check: word puzzle vs letter puzzle
    const isWordPuzzle = q.options.some((opt) => normalize(opt).length > 1);
    if (isWordPuzzle) {
      const words = q.answer.split(/\s+/).map(normalize);
      const tiles = q.options.map(normalize);
      if (!sameMultiset(tiles, words)) {
        errors.push(`Level ${lvl} Q${qIndex} (${id}): Word tiles multiset mismatch: options=${JSON.stringify(tiles)} vs answer=${JSON.stringify(words)}`);
      }
    } else {
      const answerLetters = [...normalize(q.answer)];
      const tiles = q.options.map(normalize);
      if (!sameMultiset(tiles, answerLetters)) {
        errors.push(`Level ${lvl} Q${qIndex} (${id}): Letter tiles multiset mismatch: options=${JSON.stringify(tiles)} vs answer=${JSON.stringify(answerLetters)}`);
      }
    }

    const item: ChallengeItem = {
      id,
      game_slug: 'scripture-scramble',
      level: lvl,
      challenge_index: qIndex,
      question_text: q.text,
      options: q.options,
      correct_answer: q.answer,
      reference: q.reference,
      explanation: q.explanation,
      metadata: {
        stage: spec.stageNum,
        stage_title: spec.stageTitle,
        level_theme: spec.levelName,
        category: spec.stageTitle,
        challengeType: spec.mechanic,
        mechanic: spec.mechanic,
        difficulty: spec.difficulty,
        timerSeconds: spec.timerSeconds,
        curated: true,
        testament: q.testament,
        acceptedAlternatives: q.acceptedAlternatives,
        hint1: q.hint1,
        hint2: q.hint2,
        isWordPuzzle: isWordPuzzle,
      }
    };

    finalQuestions.push(item);
  }
}

if (errors.length > 0) {
  console.error(`Validation errors found (${errors.length}):`);
  errors.forEach(e => console.error(' ✗ ' + e));
  process.exit(1);
}

if (finalQuestions.length !== 250) {
  throw new Error(`Expected 250 questions, got ${finalQuestions.length}`);
}

const fileHeader = `import type { ChallengeItem } from './bibleContentBank';

/**
 * BibleArena 2.0 — Scripture Scramble
 * 50 Levels · 5 Questions Per Level · 250 Questions Total
 * 10 Stages with thematic progression, diverse scrambling mechanics, and verified Bible references.
 */
export const SCRIPTURE_SCRAMBLE_QUESTIONS: ChallengeItem[] = `;

const outputPath = path.resolve(process.cwd(), 'src/data/scriptureScrambleQuestions.ts');
const fileContent = `${fileHeader}${JSON.stringify(finalQuestions, null, 2)};\n`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully validated and wrote ${finalQuestions.length} questions to ${outputPath}`);

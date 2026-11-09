import fs from 'fs';
import path from 'path';
import { LEVEL_SPECS, LevelSpec } from './buildApproved50Levels';
import { STAGES_1_TO_3, QuestionData } from './bankStages1to3';
import { STAGES_4_TO_6 } from './bankStages4to6';
import { STAGES_7_TO_10 } from './bankStages7to10';
import type { ChallengeItem } from '../src/data/bibleContentBank';

function generateCluesIfMissing(q: QuestionData): [string, string, string] {
  if (q.clues && q.clues.length === 3) {
    return q.clues;
  }
  // Fallback: split or craft from question and explanation
  const lines = q.text.split('\n').filter(l => l.trim().startsWith('•') || l.trim().startsWith('-'));
  if (lines.length >= 3) {
    return [
      lines[0].replace(/^[•\-]\s*/, '').trim(),
      lines[1].replace(/^[•\-]\s*/, '').trim(),
      lines[2].replace(/^[•\-]\s*/, '').trim()
    ];
  }
  return [
    `Clue 1: Relates to ${q.reference}.`,
    `Clue 2: ${q.explanation.slice(0, 80)}...`,
    `Clue 3: The answer starts with "${q.answer[0]}".`
  ];
}

const allRaw: QuestionData[] = [
  ...STAGES_1_TO_3,
  ...STAGES_4_TO_6,
  ...STAGES_7_TO_10
];

console.log(`Total raw questions collected: ${allRaw.length}`);

// Map level specs
const specMap = new Map<number, LevelSpec>();
for (const spec of LEVEL_SPECS) {
  specMap.set(spec.level, spec);
}

const finalQuestions: ChallengeItem[] = [];
const seenIds = new Set<string>();

for (let lvl = 1; lvl <= 50; lvl++) {
  const spec = specMap.get(lvl);
  if (!spec) {
    throw new Error(`Missing spec for level ${lvl}`);
  }

  const levelQs = allRaw.filter(q => q.level === lvl);
  if (levelQs.length !== 5) {
    throw new Error(`Level ${lvl} has ${levelQs.length} questions, expected 5`);
  }

  // Sort by index
  levelQs.sort((a, b) => a.index - b.index);

  for (let idx = 0; idx < 5; idx++) {
    const q = levelQs[idx];
    const qIndex = idx + 1;
    const id = `bible-character-quest-l${lvl}-c${qIndex}`;

    if (seenIds.has(id)) {
      throw new Error(`Duplicate id ${id}`);
    }
    seenIds.add(id);

    const clues = generateCluesIfMissing(q);

    const item: ChallengeItem = {
      id,
      game_slug: 'bible-character-quest',
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
        clues: clues
      }
    };

    finalQuestions.push(item);
  }
}

if (finalQuestions.length !== 250) {
  throw new Error(`Expected 250 questions, got ${finalQuestions.length}`);
}

const fileHeader = `import type { ChallengeItem } from './bibleContentBank';

/**
 * BibleArena 2.0 — Bible Character Quest
 * 50 Levels · 5 Questions Per Level · 250 Questions Total
 * 10 Stages with thematic progression, uncommon names, and level-specific challenge mechanics.
 */
export const BIBLE_CHARACTER_QUEST_QUESTIONS: ChallengeItem[] = `;

const outputPath = path.resolve(process.cwd(), 'src/data/bibleCharacterQuestQuestions.ts');
const fileContent = `${fileHeader}${JSON.stringify(finalQuestions, null, 2)};\n`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully wrote ${finalQuestions.length} questions to ${outputPath}`);

// Build and validate Guess The Emoji Question Bank (250 items across 50 levels)
import * as fs from 'fs';
import * as path from 'path';

import { EMOJI_STAGES_1_2 } from './emojiStages1to2';
import { EMOJI_STAGES_3_4 } from './emojiStages3to4';
import { EMOJI_STAGES_5_6 } from './emojiStages5to6';
import { EMOJI_STAGES_7_8 } from './emojiStages7to8';
import { EMOJI_STAGES_9_10 } from './emojiStages9to10';

const allQuestions = [
  ...EMOJI_STAGES_1_2,
  ...EMOJI_STAGES_3_4,
  ...EMOJI_STAGES_5_6,
  ...EMOJI_STAGES_7_8,
  ...EMOJI_STAGES_9_10
];

console.log(`Aggregated ${allQuestions.length} challenges.`);

if (allQuestions.length !== 250) {
  throw new Error(`Expected exactly 250 challenges, got ${allQuestions.length}`);
}

// Validation
const idsSeen = new Set<string>();
const levelCounts: Record<number, number> = {};

for (const q of allQuestions) {
  if (idsSeen.has(q.id)) {
    throw new Error(`Duplicate id found: ${q.id}`);
  }
  idsSeen.add(q.id);

  levelCounts[q.level] = (levelCounts[q.level] || 0) + 1;

  if (q.level < 1 || q.level > 50) {
    throw new Error(`Invalid level ${q.level} in ${q.id}`);
  }
  if (q.challenge_index < 1 || q.challenge_index > 5) {
    throw new Error(`Invalid challenge_index ${q.challenge_index} in ${q.id}`);
  }
  if (!q.question_text || q.question_text.trim() === '') {
    throw new Error(`Empty question_text in ${q.id}`);
  }
  if (!q.explanation || q.explanation.trim() === '') {
    throw new Error(`Empty explanation in ${q.id}`);
  }
  if (!q.reference || q.reference.trim() === '') {
    throw new Error(`Empty reference in ${q.id}`);
  }
  if (!q.metadata.puzzle_type) {
    throw new Error(`Missing puzzle_type in ${q.id}`);
  }
  if (!q.metadata.timerSeconds || q.metadata.timerSeconds < 30) {
    throw new Error(`Invalid timerSeconds in ${q.id}`);
  }
  if (!q.metadata.points || q.metadata.points < 50) {
    throw new Error(`Invalid points in ${q.id}`);
  }

  if (q.metadata.is_typed) {
    if (!q.correct_answer || q.correct_answer.trim() === '') {
      throw new Error(`Missing correct_answer for typed question ${q.id}`);
    }
  } else {
    if (q.options.length !== 4) {
      throw new Error(`Expected 4 options in MC question ${q.id}, got ${q.options.length}`);
    }
    const distinct = new Set(q.options);
    if (distinct.size !== 4) {
      throw new Error(`Duplicate options in ${q.id}: ${JSON.stringify(q.options)}`);
    }
    if (!q.options.includes(q.correct_answer)) {
      throw new Error(`Options do not include correct_answer in ${q.id}. Correct: "${q.correct_answer}", Options: ${JSON.stringify(q.options)}`);
    }
  }
}

for (let lvl = 1; lvl <= 50; lvl++) {
  if (levelCounts[lvl] !== 5) {
    throw new Error(`Level ${lvl} has ${levelCounts[lvl] || 0} questions, expected 5!`);
  }
}

console.log('All 250 challenges passed validation successfully!');

const targetPath = path.resolve(process.cwd(), 'src/data/guessTheEmojiQuestions.ts');

const fileContent = `// Guess The Emoji Master Question Bank
// 50 Levels x 5 Challenges = 250 Curated Scripture Challenges
// Advanced Difficulty Upgrade with 10 Stages, Forensic Investigation Dossiers, Dynamic Timers, and Typed Challenges

export interface EmojiChallengeItem {
  id: string;
  game_slug: 'guess-the-emoji';
  level: number;
  challenge_index: number;
  question_text: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  reference: string;
  metadata: {
    stage: number;
    stage_title: string;
    level_title: string;
    puzzle_type: 'no_obvious_clues' | 'forgotten_person' | 'five_detail_mystery' | 'similar_story_trap' | 'exact_person' | 'cross_testament' | 'scripture_detective';
    emojis: string;
    prompt?: string;
    testament: 'Old Testament' | 'New Testament' | 'Cross-Testament';
    difficulty: 'Moderate' | 'Difficult' | 'Very Difficult' | 'Expert' | 'Master' | 'Extreme Master';
    timerSeconds: number;
    points: number;
    is_typed?: boolean;
    dossier?: string;
    acceptedAlternatives?: string[];
    hint1?: string;
    hint2?: string;
    curated: true;
  };
}

export const GUESS_THE_EMOJI_QUESTIONS: EmojiChallengeItem[] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log(`Successfully generated ${targetPath} (${fileContent.length} bytes)!`);

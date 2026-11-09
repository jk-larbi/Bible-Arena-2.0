import { writeFileSync } from 'fs';
import { SCRIPTURE_STAGES_1_TO_3 } from './completeScriptureStages1to3';
import { SCRIPTURE_STAGES_4_TO_6 } from './completeScriptureStages4to6';
import { SCRIPTURE_STAGES_7_TO_10 } from './completeScriptureStages7to10';
import type { ChallengeItem } from '../src/data/bibleContentBank';

const MODE_LABELS: Record<number, string> = {
  0: 'Find the Missing Word',
  1: 'Multiple Missing Words',
  2: 'Arrange the Missing Words',
  3: 'Type the Missing Word',
  4: 'Disappearing Scripture',
  5: 'No Reference Challenge',
};

const MODE_PROMPTS: Record<number, string> = {
  0: 'Choose the exact missing word from this KJV verse:',
  1: 'Fill in the missing words in the correct order to complete this KJV verse:',
  2: 'Arrange the missing words in their correct order to complete the KJV verse:',
  3: 'Type the exact missing word to complete this KJV verse:',
  4: 'Memorise the verse shown, then hide it and rebuild the missing words:',
  5: 'Complete the verse. This round deliberately hides the reference until answered:',
};

// Deterministic Mulberry32 PRNG
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleDeterministic<T>(arr: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const rawList = [
  ...SCRIPTURE_STAGES_1_TO_3,
  ...SCRIPTURE_STAGES_4_TO_6,
  ...SCRIPTURE_STAGES_7_TO_10,
];

console.log(`Loaded ${rawList.length} raw Scripture challenges.`);
if (rawList.length !== 250) {
  throw new Error(`Expected 250 questions, got ${rawList.length}`);
}

const challenges: ChallengeItem[] = [];

for (const raw of rawList) {
  const id = `complete-the-scripture-l${raw.level}-c${raw.challengeIndex}`;
  const seed = raw.level * 100 + raw.challengeIndex * 7;

  // Mask target words in verse
  let maskedText = raw.verseText;
  for (const target of raw.targetWords) {
    // Regex replace word boundaries ignoring punctuation
    const reg = new RegExp(`\\b${target}\\b`, 'i');
    maskedText = maskedText.replace(reg, '________');
  }

  // Build options & wordPool
  let options: string[] = [];
  let wordPool: string[] = [];

  if (raw.mode === 0 || raw.mode === 5) {
    const target = raw.targetWords[0];
    const rawOptions = [target, ...(raw.distractors || ['grace', 'faith', 'truth'])].slice(0, 4);
    // Ensure 4 distinct options
    const uniqueOpts = [...new Set(rawOptions)];
    while (uniqueOpts.length < 4) {
      const fillers = ['mercy', 'glory', 'peace', 'righteousness', 'salvation'];
      const add = fillers.find(f => !uniqueOpts.includes(f)) || 'hope';
      uniqueOpts.push(add);
    }
    options = shuffleDeterministic(uniqueOpts, seed);
  } else if (raw.mode === 2 || raw.mode === 4) {
    const pool = [...raw.targetWords, ...(raw.distractors || ['mercy', 'glory'])];
    wordPool = shuffleDeterministic(pool, seed + 13);
    options = wordPool;
  } else {
    // Mode 1 and 3 are typed input
    options = [];
  }

  const correctAnswer = raw.targetWords.join(' ');
  const explanation = `${raw.explanation} The complete KJV wording is: "${raw.verseText}"`;

  challenges.push({
    id,
    game_slug: 'complete-the-scripture',
    level: raw.level,
    challenge_index: raw.challengeIndex,
    question_text: MODE_PROMPTS[raw.mode] || 'Complete the KJV Scripture:',
    options,
    correct_answer: correctAnswer,
    explanation,
    reference: raw.ref,
    metadata: {
      mode: raw.mode,
      modeLabel: MODE_LABELS[raw.mode],
      verseText: raw.verseText,
      maskedText,
      targetWords: raw.targetWords,
      wordPool,
      hiddenReference: raw.mode === 5,
      category: raw.stageTitle,
      stage: raw.stage,
      level_theme: raw.levelTitle,
      difficulty: raw.difficulty,
      timerSeconds: raw.timerSeconds,
      curated: true,
    },
  });
}

// Verification checks
const ids = new Set<string>();
for (const c of challenges) {
  if (ids.has(c.id)) throw new Error(`Duplicate ID: ${c.id}`);
  ids.add(c.id);

  const meta = c.metadata!;
  if (!meta.verseText || !meta.maskedText || !Array.isArray(meta.targetWords) || !meta.targetWords.length) {
    throw new Error(`Invalid metadata in ${c.id}`);
  }

  if (meta.mode === 0 || meta.mode === 5) {
    if (c.options.length !== 4) throw new Error(`${c.id}: expected 4 options, got ${c.options.length}`);
    if (!c.options.includes(c.correct_answer)) throw new Error(`${c.id}: correct answer missing from options`);
  }
}

console.log(`All ${challenges.length} challenges passed strict validation!`);

const fileContent = `// Complete the Scripture — 50 Levels · 250 Questions
// King James Version (KJV) verified passages with multiple dynamic interactive challenge modes.
import type { ChallengeItem } from './bibleContentBank';

export const COMPLETE_THE_SCRIPTURE_QUESTIONS: ChallengeItem[] = ${JSON.stringify(challenges, null, 2)};
`;

writeFileSync('src/data/completeScriptureQuestions.ts', fileContent, 'utf-8');
console.log('Saved to src/data/completeScriptureQuestions.ts');

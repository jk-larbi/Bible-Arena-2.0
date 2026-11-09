// Build Bible Timeline bank: 50 Levels · 250 Questions
import fs from 'fs';
import { TIMELINE_STAGES_1_TO_3 } from './timelineStages1to3';
import { TIMELINE_STAGES_4_TO_6 } from './timelineStages4to6';
import { TIMELINE_STAGES_7_TO_10 } from './timelineStages7to10';

const allPuzzles = [
  ...TIMELINE_STAGES_1_TO_3,
  ...TIMELINE_STAGES_4_TO_6,
  ...TIMELINE_STAGES_7_TO_10,
];

console.log(`Total raw timeline puzzles gathered: ${allPuzzles.length}`);
if (allPuzzles.length !== 250) {
  throw new Error(`Expected exactly 250 puzzles, but found ${allPuzzles.length}`);
}

// Fixed non-identity permutations to scramble the 4 events
const PERMUTATIONS = [
  [2, 0, 3, 1],
  [3, 1, 0, 2],
  [1, 3, 2, 0],
  [3, 2, 1, 0],
  [2, 3, 0, 1],
  [1, 0, 3, 2],
  [3, 0, 1, 2],
];

const seenKeys = new Set<string>();

const challengeItems = allPuzzles.map((p, pIdx) => {
  const key = `l${p.level}-c${p.challengeIndex}`;
  if (seenKeys.has(key)) {
    throw new Error(`Duplicate level/challenge key: ${key}`);
  }
  seenKeys.add(key);

  if (p.events.length !== 4) {
    throw new Error(`${key} has ${p.events.length} events, expected 4`);
  }

  const titles = new Set(p.events.map((e) => e[0].trim().toLowerCase()));
  if (titles.size !== 4) {
    throw new Error(`${key} has duplicate event titles: ${p.events.map((x) => x[0]).join(', ')}`);
  }

  for (const event of p.events) {
    if (!event[1] || !event[1].trim()) {
      throw new Error(`${key} missing scripture ref for event: ${event[0]}`);
    }
  }

  const perm = PERMUTATIONS[(p.level * 3 + p.challengeIndex) % PERMUTATIONS.length];
  const orderedTitles = p.events.map((e) => e[0]);
  const scrambledOptions = perm.map((idx) => orderedTitles[idx]);

  // Ensure scrambledOptions is not already in correct order
  if (scrambledOptions.join(' -> ') === orderedTitles.join(' -> ')) {
    throw new Error(`${key} scrambled options accidentally match correct order!`);
  }

  const correctAnswer = orderedTitles.join(' -> ');
  const explanation = `Chronological sequence: ${p.events.map((e, idx) => `${idx + 1}. ${e[0]} (${e[1]})`).join(' → ')}.`;
  const reference = p.events.map((e) => e[1]).join('; ');

  return {
    id: `bible-timeline-l${p.level}-c${p.challengeIndex}`,
    game_slug: 'bible-timeline',
    level: p.level,
    challenge_index: p.challengeIndex,
    question_text: p.questionText,
    options: scrambledOptions,
    correct_answer: correctAnswer,
    explanation,
    reference,
    metadata: {
      events: p.events.map((e, idx) => ({ order: idx + 1, title: e[0], ref: e[1] })),
      mode: p.mode,
      category: p.stageTitle,
      stage: p.stage,
      level_theme: p.levelTitle,
      difficulty: p.difficulty,
      timerSeconds: p.timerSeconds,
      curated: true,
    },
  };
});

const fileContent = `// Bible Timeline — 50 Levels · 250 Questions
// Verified biblical chronological sequences across 10 distinct thematic stages.
import type { ChallengeItem } from './bibleContentBank';

export const BIBLE_TIMELINE_QUESTIONS: ChallengeItem[] = ${JSON.stringify(challengeItems, null, 2)};
`;

fs.writeFileSync('src/data/bibleTimelineQuestions.ts', fileContent, 'utf8');
console.log(`Successfully built src/data/bibleTimelineQuestions.ts with ${challengeItems.length} questions across 50 levels!`);

import { ALL_19_GAME_SLUGS, buildLocalChallengesForLevel } from '../src/data/bibleContentBank';
import { buildBibleCrosswordLayout } from '../src/components/game/BibleCrosswordBoard';

const failures: string[] = [];
const ids = new Set<string>();
let total = 0;
let crosswordLayouts = 0;
let crosswordClues = 0;

const normalize = (value: string) => value.normalize('NFKC').toLowerCase().replace(/[^a-z0-9]/g, '');
const sameMultiset = (left: string[], right: string[]) => {
  const a = [...left].sort();
  const b = [...right].sort();
  return a.length === b.length && a.every((value, index) => value === b[index]);
};

for (const game of ALL_19_GAME_SLUGS) {
  for (let level = 1; level <= 50; level++) {
    let items;
    try {
      items = buildLocalChallengesForLevel(game, level);
    } catch (error) {
      failures.push(`${game} L${level}: generator threw ${String(error)}`);
      continue;
    }
    if (items.length !== 5) failures.push(`${game} L${level}: expected 5 challenges, got ${items.length}`);

    for (const item of items) {
      total++;
      if (!item.id || ids.has(item.id)) failures.push(`${game} L${level} C${item.challenge_index}: missing or duplicate id`);
      ids.add(item.id);
      if (!item.question_text?.trim() || !item.correct_answer?.trim() || !item.reference?.trim() || !item.explanation?.trim()) {
        failures.push(`${game} L${level} C${item.challenge_index}: missing question, answer, reference or explanation`);
      }

      if (game === 'bible-crossword') {
        const entries = (item.metadata?.entries || []) as Array<{number:number;answer:string;clue:string;reference:string;direction:'across'|'down'}>;
        const layout = buildBibleCrosswordLayout(entries);
        crosswordLayouts++;
        crosswordClues += entries.length;
        if (entries.length !== 10) failures.push(`${item.id}: expected 10 crossword entries, got ${entries.length}`);
        if (new Set(entries.map((entry) => normalize(entry.answer))).size !== entries.length) failures.push(`${item.id}: duplicate crossword answer`);
        if (layout.placed.length !== 10) failures.push(`${item.id}: only ${layout.placed.length}/10 clues fit in the intersecting grid`);
        if (!entries.every((entry) => entry.clue && entry.reference)) failures.push(`${item.id}: crossword clue missing its reference`);
      } else if (game === 'bible-chain-challenge') {
        const chain = item.metadata?.chain as string[] | undefined;
        const required = String(item.metadata?.requiredLetter || '').toUpperCase();
        const answer = normalize(item.correct_answer);
        if (!chain || chain.length !== 4 || !required || !answer.startsWith(required.toLowerCase())) failures.push(`${item.id}: invalid Bible name chain`);
        if (chain && new Set(chain.map(normalize)).size !== chain.length) failures.push(`${item.id}: repeated name inside chain`);
      } else if (game === 'complete-the-scripture') {
        const meta = item.metadata || {};
        if (!meta.verseText || !meta.maskedText || !Array.isArray(meta.targetWords) || !meta.targetWords.length || !Number.isInteger(meta.mode) || meta.mode < 0 || meta.mode > 5) {
          failures.push(`${item.id}: incomplete Scripture mode metadata`);
        }
      } else if (game === 'scripture-scramble') {
        const answer = normalize(item.correct_answer);
        const letters = item.options.map(normalize);
        if (!sameMultiset(letters, [...answer])) failures.push(`${item.id}: scrambled letters do not exactly match the answer`);
      } else if (game === 'verse-builder') {
        if (!sameMultiset(item.options.map(normalize), item.correct_answer.split(/\\s+/).map(normalize))) failures.push(`${item.id}: word tiles do not match the complete verse`);
      } else if (game === 'bible-word-search') {
        const words = (item.metadata?.words || item.options) as string[];
        if (words.length < 2 || words.some((word) => !normalize(word))) failures.push(`${item.id}: invalid word-search target list`);
      } else if (game === 'bible-match-up') {
        const pairs = (item.metadata?.pairs || []) as Array<{left:string;right:string;ref:string}>;
        if (pairs.length !== 4 || new Set(pairs.map((pair) => normalize(pair.left))).size !== pairs.length || pairs.some((pair) => !pair.ref)) failures.push(`${item.id}: match-up set is incomplete`);
      } else if (game === 'bible-memory-challenge') {
        const pairs = (item.metadata?.memoryPairs || []) as Array<{a:string;b:string}>;
        if (pairs.length < 2 || pairs.some((pair) => !pair.a || !pair.b)) failures.push(`${item.id}: memory pairs are incomplete`);
      } else if (game === 'bible-puzzles') {
        const tiles = (item.metadata?.tiles || []) as string[];
        if (tiles.length !== 3 || !sameMultiset(item.options.map(normalize), tiles.map(normalize))) failures.push(`${item.id}: puzzle fragments are incomplete or inconsistent`);
      } else if (game === 'bible-timeline') {
        if (item.options.length !== 4 || item.correct_answer.split(' -> ').length !== 4) failures.push(`${item.id}: timeline does not contain four ordered entries`);
      } else if (game === 'old-vs-new-testament') {
        if (item.options.length !== 2 || !item.options.includes(item.correct_answer)) failures.push(`${item.id}: invalid Testament classification options`);
      } else if (item.options.length !== 4 || new Set(item.options.map(normalize)).size !== 4 || !item.options.some((option) => normalize(option) === normalize(item.correct_answer))) {
        failures.push(`${item.id}: expected four distinct options including the answer`);
      }
    }
  }
}

console.log('BIBLE ARENA — 50-LEVEL PLAYABILITY CHECK');
console.log(`Games: ${ALL_19_GAME_SLUGS.length}; levels: ${ALL_19_GAME_SLUGS.length * 50}; challenge slots: ${total}; unique IDs: ${ids.size}`);
console.log(`Crossword layouts checked: ${crosswordLayouts}; clue entries: ${crosswordClues}`);
if (failures.length) {
  console.error(`FAILED: ${failures.length} issue(s). First 80:`);
  failures.slice(0, 80).forEach((failure) => console.error(' - ' + failure));
  process.exit(1);
}
console.log('PASSED: every level returns five complete challenges and every game-specific payload passes its structural gameplay check.');

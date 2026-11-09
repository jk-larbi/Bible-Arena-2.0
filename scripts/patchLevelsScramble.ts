import fs from 'fs';
import path from 'path';

const levelsPath = path.resolve('src/lib/levels.ts');
let content = fs.readFileSync(levelsPath, 'utf-8');
const isCRLF = content.includes('\r\n');
let normContent = content.replace(/\r\n/g, '\n');

// 1. Update LOCAL_CONTENT_GAMES
const oldSet = "const LOCAL_CONTENT_GAMES = new Set(['bible-crossword', 'bible-chain-challenge', 'complete-the-scripture', 'bible-character-quest']);";
const newSet = "const LOCAL_CONTENT_GAMES = new Set(['bible-crossword', 'bible-chain-challenge', 'complete-the-scripture', 'bible-character-quest', 'scripture-scramble']);";

if (normContent.includes(oldSet)) {
  normContent = normContent.replace(oldSet, newSet);
} else {
  console.error('Could not find oldSet');
  process.exit(1);
}

// 2. Update answer checking logic
const oldCheck = `  const normUser = answer.trim().toLowerCase();
  const normCorrect = localItem.correct_answer.trim().toLowerCase();
  const isCorrect = normUser.length > 0 && normUser === normCorrect;`;

const newCheck = `  const normUserRaw = answer.trim().toLowerCase();
  const normCorrectRaw = localItem.correct_answer.trim().toLowerCase();
  const normUserAlphanum = normUserRaw.replace(/[^a-z0-9]/g, '');
  const normCorrectAlphanum = normCorrectRaw.replace(/[^a-z0-9]/g, '');

  const acceptedList: string[] = Array.isArray(localItem.metadata?.acceptedAlternatives)
    ? localItem.metadata.acceptedAlternatives.map((a: string) => a.trim().toLowerCase())
    : [];

  const isCorrect =
    normUserRaw.length > 0 &&
    (normUserRaw === normCorrectRaw ||
     normUserAlphanum === normCorrectAlphanum ||
     acceptedList.includes(normUserRaw) ||
     acceptedList.some((alt) => alt.replace(/[^a-z0-9]/g, '') === normUserAlphanum));`;

if (normContent.includes(oldCheck)) {
  normContent = normContent.replace(oldCheck, newCheck);
} else {
  console.error('Could not find oldCheck');
  process.exit(1);
}

const finalContent = isCRLF ? normContent.replace(/\n/g, '\r\n') : normContent;
fs.writeFileSync(levelsPath, finalContent, 'utf-8');
console.log('Successfully patched levels.ts for scripture-scramble');

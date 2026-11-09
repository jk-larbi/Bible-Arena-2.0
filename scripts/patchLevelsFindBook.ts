import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'lib', 'levels.ts');
let content = fs.readFileSync(file, 'utf8');

const target = "const LOCAL_CONTENT_GAMES = new Set(['bible-crossword', 'bible-chain-challenge', 'complete-the-scripture', 'bible-character-quest', 'scripture-scramble', 'bible-match-up', 'bible-timeline', 'bible-puzzles']);";
const replacement = "const LOCAL_CONTENT_GAMES = new Set(['bible-crossword', 'bible-chain-challenge', 'complete-the-scripture', 'bible-character-quest', 'scripture-scramble', 'bible-match-up', 'bible-timeline', 'bible-puzzles', 'find-the-bible-book']);";

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Successfully patched levels.ts!');
} else {
  const targetCRLF = target.replace(/\n/g, '\r\n');
  const repCRLF = replacement.replace(/\n/g, '\r\n');
  if (content.includes(targetCRLF)) {
    content = content.replace(targetCRLF, repCRLF);
    fs.writeFileSync(file, content);
    console.log('Successfully patched levels.ts with CRLF!');
  } else {
    throw new Error('Target not found in levels.ts');
  }
}

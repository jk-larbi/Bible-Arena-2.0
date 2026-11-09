import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'data', 'bibleContentBank.ts');
let content = fs.readFileSync(file, 'utf8');

// 1. Add import
const importTarget = "import { FIND_THE_BIBLE_BOOK_QUESTIONS } from './findTheBibleBookQuestions';";
const importRep = "import { FIND_THE_BIBLE_BOOK_QUESTIONS } from './findTheBibleBookQuestions';\nimport { BIBLE_RIDDLES_QUESTIONS } from './bibleRiddlesQuestions';";

if (!content.includes(importTarget)) {
  throw new Error('importTarget not found in bibleContentBank.ts');
}
content = content.replace(importTarget, importRep);

// 2. Case bible-riddles
const caseTarget = `      case 'bible-riddles': {
        const r = RIDDLES_POOL[globalSeed % RIDDLES_POOL.length];`;

const caseRep = `      case 'bible-riddles': {
        const curated = BIBLE_RIDDLES_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

        const r = RIDDLES_POOL[globalSeed % RIDDLES_POOL.length];`;

if (content.includes(caseTarget)) {
  content = content.replace(caseTarget, caseRep);
} else {
  const caseTargetCRLF = caseTarget.replace(/\n/g, '\r\n');
  const caseRepCRLF = caseRep.replace(/\n/g, '\r\n');
  if (content.includes(caseTargetCRLF)) {
    content = content.replace(caseTargetCRLF, caseRepCRLF);
  } else {
    throw new Error('caseTarget not found in bibleContentBank.ts');
  }
}

fs.writeFileSync(file, content);
console.log('Successfully patched bibleContentBank.ts for bible-riddles!');

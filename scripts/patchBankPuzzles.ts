import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'data', 'bibleContentBank.ts');
let content = fs.readFileSync(file, 'utf8');

const target = `      case 'bible-puzzles': {
        const v = VERSES_POOL[globalSeed % VERSES_POOL.length];`;

const replacement = `      case 'bible-puzzles': {
        const curated = BIBLE_PUZZLES_QUESTIONS.find(
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

        const v = VERSES_POOL[globalSeed % VERSES_POOL.length];`;

const normalizedTarget = target.replace(/\r?\n/g, '\r\n');
const normalizedReplacement = replacement.replace(/\r?\n/g, '\r\n');

if (!content.includes(normalizedTarget)) {
  console.error('Target not found in bibleContentBank.ts');
  process.exit(1);
}

content = content.replace(normalizedTarget, normalizedReplacement);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully patched bibleContentBank.ts for bible-puzzles!');

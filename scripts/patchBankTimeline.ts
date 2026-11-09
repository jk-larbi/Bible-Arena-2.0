import fs from 'fs';

let code = fs.readFileSync('src/data/bibleContentBank.ts', 'utf8');

const regex = /case 'bible-timeline':\s*\{\s*const startBook = \(globalSeed \* 2\) % \(BOOKS_66\.length - 4\);/;

const replacement = `case 'bible-timeline': {
        const curated = BIBLE_TIMELINE_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
          });
          break;
        }

        const startBook = (globalSeed * 2) % (BOOKS_66.length - 4);`;

if (!regex.test(code)) {
  console.error('Regex target not found in bibleContentBank.ts!');
  process.exit(1);
}

code = code.replace(regex, replacement);
fs.writeFileSync('src/data/bibleContentBank.ts', code, 'utf8');
console.log('Successfully patched case bible-timeline in bibleContentBank.ts');

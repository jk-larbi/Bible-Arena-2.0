import fs from 'fs';

let code = fs.readFileSync('src/data/bibleContentBank.ts', 'utf8');

const regex = /case 'bible-match-up':\s*\{\s*const matchSet = getMatchUpChallenge\(globalSeed\);/;

const replacement = `case 'bible-match-up': {
        const curated = BIBLE_MATCH_UP_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
          });
          break;
        }

        const matchSet = getMatchUpChallenge(globalSeed);`;

if (!regex.test(code)) {
  console.error('Regex target not found in bibleContentBank.ts!');
  process.exit(1);
}

code = code.replace(regex, replacement);
fs.writeFileSync('src/data/bibleContentBank.ts', code, 'utf8');
console.log('Successfully patched case bible-match-up in bibleContentBank.ts');

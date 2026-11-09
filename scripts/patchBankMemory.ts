import * as fs from 'fs';
import * as path from 'path';

const file = path.join(process.cwd(), 'src', 'data', 'bibleContentBank.ts');
let content = fs.readFileSync(file, 'utf8');

const target = `      case 'bible-memory-challenge': {
        const subset = [
          BOOKS_66[globalSeed % BOOKS_66.length],
          BOOKS_66[(globalSeed + 4) % BOOKS_66.length],
          BOOKS_66[(globalSeed + 9) % BOOKS_66.length],
        ];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: 'Flip and match each Bible book card with its key scriptural reference:',
          options: subset.map((s) => \`\${s.name}|\${s.ref}\`),
          correct_answer: subset.map((s) => \`\${s.name}=\${s.ref}\`).join(','),
          explanation: subset.map((s) => \`\${s.name} (\${s.ref}): \${s.clue}\`).join(' • '),
          reference: subset.map((s) => s.ref).join('; '),
          metadata: {
            memoryPairs: subset.map((s) => ({ a: s.name, b: s.ref })),
          },
        });
        break;
      }`;

const replacement = `      case 'bible-memory-challenge': {
        const curated = BIBLE_MEMORY_QUESTIONS.find(
          (entry) => entry.level === level && entry.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            game_slug: gameSlug,
          });
          break;
        }
        const subset = [
          BOOKS_66[globalSeed % BOOKS_66.length],
          BOOKS_66[(globalSeed + 4) % BOOKS_66.length],
          BOOKS_66[(globalSeed + 9) % BOOKS_66.length],
        ];
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: 'Flip and match each Bible book card with its key scriptural reference:',
          options: subset.map((s) => \`\${s.name}|\${s.ref}\`),
          correct_answer: subset.map((s) => \`\${s.name}=\${s.ref}\`).join(','),
          explanation: subset.map((s) => \`\${s.name} (\${s.ref}): \${s.clue}\`).join(' • '),
          reference: subset.map((s) => s.ref).join('; '),
          metadata: {
            memoryPairs: subset.map((s) => ({ a: s.name, b: s.ref })),
          },
        });
        break;
      }`;

content = content.replace(/\r\n/g, '\n');
const normTarget = target.replace(/\r\n/g, '\n');
if (!content.includes(normTarget)) {
  console.error('Target not found!');
  process.exit(1);
}

content = content.replace(normTarget, replacement);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully patched bibleContentBank.ts for bible-memory-challenge!');

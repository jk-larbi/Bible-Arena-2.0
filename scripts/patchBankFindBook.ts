import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'data', 'bibleContentBank.ts');
let content = fs.readFileSync(file, 'utf8');

const target = `      case 'find-the-bible-book': {
        const book = BOOKS_66[globalSeed % BOOKS_66.length];`;

const replacement = `      case 'find-the-bible-book': {
        const curated = FIND_THE_BIBLE_BOOK_QUESTIONS.find(
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

        const book = BOOKS_66[globalSeed % BOOKS_66.length];`;

if (!content.includes(target)) {
  // Try CRLF
  const targetCRLF = target.replace(/\n/g, '\r\n');
  const replacementCRLF = replacement.replace(/\n/g, '\r\n');
  if (content.includes(targetCRLF)) {
    content = content.replace(targetCRLF, replacementCRLF);
    fs.writeFileSync(file, content);
    console.log('Successfully patched bibleContentBank.ts with CRLF!');
    process.exit(0);
  }
  throw new Error('Could not find target in bibleContentBank.ts');
} else {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content);
  console.log('Successfully patched bibleContentBank.ts with LF!');
}

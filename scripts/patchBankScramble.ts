import fs from 'fs';
import path from 'path';

const bankPath = path.resolve('src/data/bibleContentBank.ts');
let content = fs.readFileSync(bankPath, 'utf-8');

// 1. Add import
if (!content.includes('SCRIPTURE_SCRAMBLE_QUESTIONS')) {
  content = content.replace(
    "import { BIBLE_CHARACTER_QUEST_QUESTIONS } from './bibleCharacterQuestQuestions';",
    "import { BIBLE_CHARACTER_QUEST_QUESTIONS } from './bibleCharacterQuestQuestions';\nimport { SCRIPTURE_SCRAMBLE_QUESTIONS } from './scriptureScrambleQuestions';"
  );
}

// 2. Replace case 'scripture-scramble':
const oldCase = `      case 'scripture-scramble': {
        const wordSource = BOOKS_66[globalSeed % BOOKS_66.length];
        const cleanWord = wordSource.name.replace(/[^a-zA-Z]/g, '').toUpperCase();
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: \`Unscramble the letters to form the name of this biblical book: "\${wordSource.clue}"\`,
          options: shuffleDeterministic(cleanWord.split(''), shuffleSeed),
          correct_answer: cleanWord,
          explanation: \`\${wordSource.name} (\${wordSource.section}): \${wordSource.clue}.\`,
          reference: wordSource.ref,
          metadata: {
            word: cleanWord,
          },
        });
        break;
      }`;

const newCase = `      case 'scripture-scramble': {
        const curated = SCRIPTURE_SCRAMBLE_QUESTIONS.find(
          (q) => q.level === level && q.challenge_index === challengeIndex
        );
        if (curated) {
          items.push({
            ...curated,
            id,
            options: shuffleDeterministic([...curated.options], shuffleSeed),
          });
          break;
        }

        const wordSource = BOOKS_66[globalSeed % BOOKS_66.length];
        const cleanWord = wordSource.name.replace(/[^a-zA-Z]/g, '').toUpperCase();
        items.push({
          id,
          game_slug: gameSlug,
          level,
          challenge_index: challengeIndex,
          question_text: \`Unscramble the letters to form the name of this biblical book: "\${wordSource.clue}"\`,
          options: shuffleDeterministic(cleanWord.split(''), shuffleSeed),
          correct_answer: cleanWord,
          explanation: \`\${wordSource.name} (\${wordSource.section}): \${wordSource.clue}.\`,
          reference: wordSource.ref,
          metadata: {
            word: cleanWord,
          },
        });
        break;
      }`;

// Normalize line endings for replacement
const isCRLF = content.includes('\r\n');
let normContent = content.replace(/\r\n/g, '\n');

if (normContent.includes(oldCase)) {
  normContent = normContent.replace(oldCase, newCase);
  const finalContent = isCRLF ? normContent.replace(/\n/g, '\r\n') : normContent;
  fs.writeFileSync(bankPath, finalContent, 'utf-8');
  console.log('Successfully patched bibleContentBank.ts for scripture-scramble');
} else {
  console.error('Could not find oldCase in bibleContentBank.ts');
  process.exit(1);
}

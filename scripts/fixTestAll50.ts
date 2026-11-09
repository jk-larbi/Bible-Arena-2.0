import fs from 'fs';
import path from 'path';

const filePath = path.resolve('scripts/testAll50Levels.ts');
let content = fs.readFileSync(filePath, 'utf-8');
const isCRLF = content.includes('\r\n');
let norm = content.replace(/\r\n/g, '\n');

// Replace the block
const startMarker = "      } else if (game === 'scripture-scramble') {";
const endMarker = "      } else if (game === 'verse-builder') {";

const startIndex = norm.indexOf(startMarker);
const endIndex = norm.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found');
  process.exit(1);
}

const replacement = `      } else if (game === 'scripture-scramble') {
        const isWordScramble = item.options.some((opt) => normalize(opt).length > 1);
        if (isWordScramble) {
          const words = item.correct_answer.split(/\\s+/).map(normalize);
          const tiles = item.options.map(normalize);
          if (!sameMultiset(tiles, words)) failures.push(\`\${item.id}: scrambled words do not match the answer\`);
        } else {
          const answer = normalize(item.correct_answer);
          const letters = item.options.map(normalize);
          if (!sameMultiset(letters, [...answer])) failures.push(\`\${item.id}: scrambled letters do not exactly match the answer\`);
        }
`;

norm = norm.slice(0, startIndex) + replacement + norm.slice(endIndex);

fs.writeFileSync(filePath, isCRLF ? norm.replace(/\n/g, '\r\n') : norm, 'utf-8');
console.log('Successfully fixed testAll50Levels.ts with proper backticks');

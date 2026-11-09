import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'scripts', 'testAll50Levels.ts');
let content = fs.readFileSync(file, 'utf8');

const target = `      } else if (game === 'bible-puzzles') {
        const tiles = (item.metadata?.tiles || []) as string[];
        if (tiles.length !== 3 || !sameMultiset(item.options.map(normalize), tiles.map(normalize))) failures.push(\`\${item.id}: puzzle fragments are incomplete or inconsistent\`);`.replace(/\r?\n/g, '\r\n');

const replacement = `      } else if (game === 'bible-puzzles') {
        if (item.options.length !== 4 || new Set(item.options.map(normalize)).size !== 4 || !item.options.some((option) => normalize(option) === normalize(item.correct_answer))) {
          failures.push(\`\${item.id}: expected four distinct options including the answer\`);
        }`.replace(/\r?\n/g, '\r\n');

if (!content.includes(target)) {
  console.error('target not found in testAll50Levels.ts');
  process.exit(1);
}

content = content.replace(target, replacement);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated testAll50Levels.ts for bible-puzzles!');

import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'scripts/testAll50Levels.ts');
let code = fs.readFileSync(filePath, 'utf-8');

const regex = /else if \(game === 'verse-builder'\) \{[\s\S]*?failures\.push\(`\$\{item\.id\}: word tiles do not match the complete verse`\);\s*\}/;

const replacement = `else if (game === 'verse-builder') {
        if (item.metadata?.curated) {
          if (!item.question_text || !item.correct_answer || !item.reference) {
            failures.push(\`\${item.id}: curated verse builder item is missing required fields\`);
          }
          if (item.metadata.is_typed) {
            if (item.options.length > 0) failures.push(\`\${item.id}: typed challenge should have empty options\`);
          } else if (item.metadata.is_tiles) {
            if (!item.options || item.options.length === 0) failures.push(\`\${item.id}: word tiles missing options\`);
          } else {
            if (item.options.length !== 4 || new Set(item.options.map(normalize)).size !== 4 || !item.options.some((opt) => normalize(opt) === normalize(item.correct_answer))) {
              failures.push(\`\${item.id}: expected 4 distinct options including correct answer\`);
            }
          }
        } else {
          if (!sameMultiset(item.options.map(normalize), item.correct_answer.split(/\\s+/).map(normalize))) failures.push(\`\${item.id}: word tiles do not match the complete verse\`);
        }
      }`;

if (regex.test(code)) {
  code = code.replace(regex, replacement);
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log('Regex replace SUCCESS in testAll50Levels.ts!');
} else {
  console.error('Regex did not match in testAll50Levels.ts!');
}

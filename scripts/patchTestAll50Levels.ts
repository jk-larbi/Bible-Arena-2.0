import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'scripts', 'testAll50Levels.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const targetStr = "} else if (game === 'bible-chain-challenge') {";
const nextStr = "} else if (game === 'complete-the-scripture') {";

const startIndex = content.indexOf(targetStr);
const endIndex = content.indexOf(nextStr);

if (startIndex === -1 || endIndex === -1) {
  throw new Error(`Could not find markers: startIndex=${startIndex}, endIndex=${endIndex}`);
}

const replacement = `} else if (game === 'bible-chain-challenge') {
        if (item.metadata?.curated) {
          if (!item.question_text || !item.correct_answer || !item.reference) {
            failures.push(\`\${item.id}: missing required chain fields\`);
          }
          if (!item.metadata?.is_typed) {
            if (!Array.isArray(item.options) || item.options.length !== 4 || !item.options.includes(item.correct_answer)) {
              failures.push(\`\${item.id}: invalid multiple choice chain options\`);
            }
          }
        } else {
          const chain = item.metadata?.chain as string[] | undefined;
          const required = String(item.metadata?.requiredLetter || '').toUpperCase();
          const answer = normalize(item.correct_answer);
          if (!chain || chain.length !== 4 || !required || !answer.startsWith(required.toLowerCase())) failures.push(\`\${item.id}: invalid Bible name chain\`);
          if (chain && new Set(chain.map(normalize)).size !== chain.length) failures.push(\`\${item.id}: repeated name inside chain\`);
        }
      `;

content = content.slice(0, startIndex) + replacement + content.slice(endIndex);
fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully replaced testAll50Levels chain check!');

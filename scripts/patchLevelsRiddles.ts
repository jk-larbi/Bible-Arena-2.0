import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'lib', 'levels.ts');
let content = fs.readFileSync(file, 'utf8');

const target = "'find-the-bible-book']);";
const rep = "'find-the-bible-book', 'bible-riddles']);";

if (!content.includes(target)) {
  throw new Error('target not found in levels.ts');
}

content = content.replace(target, rep);
fs.writeFileSync(file, content);
console.log('Successfully patched levels.ts for bible-riddles!');

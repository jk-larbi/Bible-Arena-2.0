import * as fs from 'fs';
import * as path from 'path';

const filePath = path.resolve(process.cwd(), 'src/components/game/BaseGame.tsx');
let c = fs.readFileSync(filePath, 'utf-8');

const badText = `    if (gameId === 'verse-builder') {
      if (metadata.hint1 && requestedLevel === 1) return metadata.hint1;
      if (metadata.hint2 && requestedLevel >= 2) return metadata.hint2;
      return requestedLevel === 1 ? Scripture reference: . Examine the exact wording. : Second clue: \\;
    }`;

const goodText = `    if (gameId === 'verse-builder') {
      if (metadata.hint1 && requestedLevel === 1) return metadata.hint1;
      if (metadata.hint2 && requestedLevel >= 2) return metadata.hint2;
      return requestedLevel === 1
        ? 'Scripture reference: ' + currentChallenge.reference + '. Examine the exact wording.'
        : 'Second clue: ' + currentChallenge.explanation;
    }`;

c = c.replace(badText, goodText);
fs.writeFileSync(filePath, c, 'utf-8');
console.log('Fixed hint injection cleanly!');

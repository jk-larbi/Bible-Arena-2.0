import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const targets = [
  'public/assets/games',
  'public/assets'
];
let converted = 0;
for (const dir of targets) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !/\\.(png|jpe?g)$/i.test(entry.name)) continue;
    if (dir === 'public/assets' && !['bible-arena-logo.png', 'battle-of-the-prophets.png', 'scripture-challenge-hero.jpg'].includes(entry.name)) continue;
    const input = path.join(dir, entry.name);
    const output = path.join(dir, entry.name.replace(/\\.(png|jpe?g)$/i, '.webp'));
    await sharp(input, { failOn: 'error' })
      .rotate()
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 76, effort: 4 })
      .toFile(output);
    converted++;
  }
}
console.log('Optimized ' + converted + ' image assets to WebP.');

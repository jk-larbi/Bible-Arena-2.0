import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const targets = [
  { dir: 'public/assets/games', filter: () => true },
  {
    dir: 'public/assets',
    filter: (name) => [
      'bible-arena-logo.png',
      'battle-of-the-prophets.png',
      'scripture-challenge-hero.jpg'
    ].includes(name)
  }
];

let converted = 0;
for (const { dir, filter } of targets) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !/\.(png|jpe?g)$/i.test(entry.name) || !filter(entry.name)) continue;
    const input = path.join(dir, entry.name);
    const output = path.join(dir, entry.name.replace(/\.(png|jpe?g)$/i, '.webp'));
    await sharp(input, { failOn: 'error' })
      .rotate()
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 76, effort: 4 })
      .toFile(output);
    converted++;
    console.log(`Created ${output}`);
  }
}

if (converted < 19) {
  throw new Error(`Expected at least 19 image conversions, but created ${converted}`);
}
console.log(`Successfully optimized ${converted} image assets to WebP.`);

import sharp from 'sharp';
import fs from 'node:fs';

const jobs = [
  ['public/01_lighthouse_branching_paths.png', 'public/engravings/lighthouse.webp', { width: 1000, quality: 80 }],
  ['public/05_ocean_sailboat_panorama.png', 'public/engravings/sailboat-panorama.webp', { width: 1800, quality: 78 }],
  ['public/02_compass_emblem.png', 'public/engravings/compass.webp', { width: 480, quality: 80 }],
  ['public/03_gear_emblem.png', 'public/engravings/gear.webp', { width: 480, quality: 80 }],
  ['public/04_hammer_emblem.png', 'public/engravings/hammer.webp', { width: 480, quality: 80 }],
];

fs.mkdirSync('public/engravings', { recursive: true });
for (const [src, dst, opt] of jobs) {
  await sharp(src).resize({ width: opt.width }).webp({ quality: opt.quality }).toFile(dst);
  console.log(dst, (fs.statSync(dst).size / 1024).toFixed(0) + 'KB');
}

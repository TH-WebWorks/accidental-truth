#!/usr/bin/env node
/**
 * Generates placeholder favicon PNGs (AT on black) when brand assets are not yet available.
 * Outputs: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
 * Run: node scripts/generate-icons.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

try {
  const sharp = (await import("sharp")).default;

  const sizes = [
    { size: 16, file: "favicon-16x16.png" },
    { size: 32, file: "favicon-32x32.png" },
    { size: 180, file: "apple-touch-icon.png" },
  ];

  const fontSize = (s) => Math.round(s * 0.45);
  const svg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="#000"/>
  <text x="50%" y="58%" font-family="Arial,sans-serif" font-size="${fontSize(size)}" font-weight="bold" fill="#fff" text-anchor="middle" dominant-baseline="middle">AT</text>
</svg>`;

  for (const { size, file } of sizes) {
    const buf = await sharp(Buffer.from(svg(size)))
      .png()
      .toBuffer();
    const out = join(publicDir, file);
    writeFileSync(out, buf);
    console.log(`Wrote ${file}`);
  }
} catch (e) {
  if (e.code === "ERR_MODULE_NOT_FOUND" && e.message?.includes("sharp")) {
    console.error("Run: npm install --save-dev sharp");
    process.exit(1);
  }
  throw e;
}

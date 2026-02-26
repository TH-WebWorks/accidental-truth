#!/usr/bin/env node
/**
 * Verifies share preview assets are served correctly (200, correct content-type, reasonable size).
 * Run with dev server up: npm run verify:share
 * Or against production: BASE_URL=https://accidentaltruth.com npm run verify:share
 */
const BASE = process.env.BASE_URL || "http://localhost:3000";

const MIN_SIZE_KB = 10;

async function check(path, opts = {}) {
  const { expectImage = true, minKb = MIN_SIZE_KB } = opts;
  const url = `${BASE}${path}`;
  let res;
  try {
    res = await fetch(url, { method: "GET" });
  } catch (e) {
    console.error(`❌ ${path}: fetch failed – ${e.message}`);
    return false;
  }
  if (res.status !== 200) {
    console.error(`❌ ${path}: expected 200, got ${res.status}`);
    return false;
  }
  const ct = (res.headers.get("content-type") || "").toLowerCase();
  if (expectImage && !ct.startsWith("image/")) {
    console.error(`❌ ${path}: expected image/*, got ${ct || "(none)"}`);
    return false;
  }
  const cl = res.headers.get("content-length");
  if (cl !== null) {
    const kb = parseInt(cl, 10) / 1024;
    if (kb < minKb) {
      console.error(`❌ ${path}: content-length ${cl} bytes (${kb.toFixed(1)} KB) < ${minKb} KB`);
      return false;
    }
  }
  console.log(`✓ ${path}`);
  return true;
}

async function main() {
  console.log(`Verifying share assets at ${BASE}\n`);
  const results = [
    await check("/assets/og-poster.webp", { minKb: 10 }),
    await check("/favicon.ico", { minKb: 0.1 }),
    await check("/apple-touch-icon.png", { minKb: 0.1 }),
  ];
  const ok = results.every(Boolean);
  process.exit(ok ? 0 : 1);
}

main();

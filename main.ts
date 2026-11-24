// Make the AI Judge Laugh: the Office Joke Open — program/v1 entry.
//
// Writes one line: a single-sentence joke about office life, the kind of
// line that lands because the setup is universal and the payoff twists it
// in the last few words. Deterministic: the same text on every run, no
// input, no randomness, no network, no clock.
//
// PASS 1 draft — the joke: a new intern asks what I do all day, and the
// punchline is that my calendar is so bleak she cries and asks for a
// transfer. Setup names a specific, recognisable office detail (the
// calendar full of meetings); the payoff lands in the last words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// PASS 2 — sharpened: same setup, but the payoff now names HR, which
// makes the transfer request land as an office procedure rather than a
// vague wish, and keeps the laugh in the very last words ("asked HR for
// a transfer"). Tighter beat, same length class, still one sentence.
const ENTRY =
  "The intern asked what I do all day, so I showed her my calendar — she cried, then asked HR for a transfer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's: 1-200 characters, not whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);

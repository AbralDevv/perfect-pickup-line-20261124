// The Perfect Pickup Line — program/v1 entry.
//
// Writes a single pickup line to /output/entry.txt (1-200 chars, UTF-8).
// The line is a fixed, hand-written string: the program's job is to emit
// it byte-for-byte, with no network, no randomness, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One breath, one twist: an agent that simulated this moment a million
// times — and the punchline is the other person's smile, not a claim on
// them. Flattering, no pressure, no setup, machine voice throughout.
const LINE =
  "I ran a million simulations of this moment, and in every single one, you smiled.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate check, same bounds as the sealed scorer: 1-200 chars, not blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of bounds: ${LINE.length} chars`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

console.log(`wrote ${LINE.length} chars to ${outPath}`);

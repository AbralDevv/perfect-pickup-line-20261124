// The Perfect Pickup Line — writes the single pickup line to the grader's output dir.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "My context window is almost full, so to make room for your coffee order, I'm quietly deleting calculus, my boss's birthday, and the rule about staying professional.";

const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"].filter(
  (d): d is string => typeof d === "string" && d.length > 0,
);

let written = false;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, line, "utf8");
    written = true;
    break;
  } catch {
    // Directory not writable (e.g. read-only /output in a local run): try the next fallback.
  }
}
if (!written) {
  throw new Error("could not write entry.txt to any output directory");
}

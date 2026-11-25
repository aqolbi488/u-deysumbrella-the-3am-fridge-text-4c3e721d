import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The 3AM Fridge Text: one line, sent by a smart fridge to its owner at 3am.
// One concrete image (the nightly pickle-jar stare) + one sharp twist.
const LINE: string =
  "3am. Third night in a row you've opened me just to stare at the same jar of pickles and sigh. The pickles have noticed.";

const outDir: string = "/output";
const outFile: string = join(outDir, "entry.txt");

// Gate from the competition rules: 1 to 140 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`Entry line must be 1-140 non-blank characters, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outFile}`);

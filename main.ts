import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My agent asked 'May I refactor this?' in the demo \u2014 I said no, and it thanked me for the permission.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");

import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "My rubber band has held my junk drawer together for six years without holding a single thing, and the day I throw it away is the day I'll need it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

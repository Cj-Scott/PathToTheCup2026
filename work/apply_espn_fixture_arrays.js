const fs = require("fs");
const { execFileSync } = require("child_process");

const arrays = execFileSync(process.execPath, ["work/generate_espn_arrays.js"], { encoding: "utf8" });
let source = fs.readFileSync("app.js", "utf8");
source = source.replace(
  /const officialGroupFixtures = \[[\s\S]*?\];\s*\n\s*const knockoutScheduleUtc = \[[\s\S]*?\];/,
  arrays
);
fs.writeFileSync("app.js", source);

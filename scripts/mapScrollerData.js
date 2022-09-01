const fs = require("fs");

const SORT_OUTPUT = true;
const UPDATE_SCROLLER_ITEMS = true;

const input = fs.readFileSync(`${__dirname}/input/scroller-data-1sep.tsv`, {
  encoding: "utf-8",
});

const rows = input.split("\n");

const output = [];

rows.forEach((row) => {
  const cells = row.split("\t");

  const id = Number(cells[1]);
  const text = cells[2].trim();
  const imgUrl = cells[3].trim() || null;
  const geo = cells[4].replace("\r", "").split(",");

  const lat = Number(geo[0]);
  const lng = Number(geo[1]);

  if (!imgUrl || !lng || !lat) return;

  output.push({
    id,
    text,
    geopoint: { lng, lat },
  });
});

let sortedOutput = null;

if (SORT_OUTPUT) {
  sortedOutput = output.sort((a, b) => b.geopoint.lat - a.geopoint.lat);
}

const usedOutput = sortedOutput || output;

fs.writeFileSync(
  `${__dirname}/output/scroller-data.json`,
  JSON.stringify(usedOutput, null, 2),
  { encoding: "utf-8" }
);

if (!UPDATE_SCROLLER_ITEMS) return;

const newFile = `
import type { ScrollerItem } from "../../components/modules/Exhibition/ExhibitionScroller/ScrollerText";
const scrollerItems: ScrollerItem[] = ${JSON.stringify(usedOutput, null, 2)}
export default scrollerItems;
`;

fs.writeFileSync(
  `${__dirname}/../site/src/lib/data/scrollerItems.ts`,
  newFile,
  { encoding: "utf-8" }
);

const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input/scroller-data.txt`, {
  encoding: "utf-8",
});

const textArray = input.split("\n");
const trimmedItems = textArray.map((item) => item.trim());

const output = trimmedItems.map((item, i) => ({
  id: i + 1,
  text: item,
  image: "/",
}));

fs.writeFileSync(
  `${__dirname}/output/scroller-data.json`,
  JSON.stringify(output, null, 2),
  { encoding: "utf-8" }
);

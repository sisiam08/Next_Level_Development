const fs = require("fs");

// Synchronously
const content1 =
  "This is a demo file. I am Practicing file write system using node.js. This is created synchronously..!";

try {
  fs.writeFileSync("./files/demoWriteFile.txt", content1);
  console.log("File created synchronously..!");
} catch (error) {
  if (error) console.error(error.message);
}

console.log("\n\n");

// Asynchronously
const content2 =
  "This is a demo file. I am Practicing file write system using node.js. This is created asynchronously..!";

fs.writeFile("./files/demoWriteFile2.txt", content2, (error) => {
  if (error) console.error(error.message);
  else console.log("File created asynchronously..!");
});

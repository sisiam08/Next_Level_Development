const path = require("path");

console.log("File name: ", __filename);
console.log("Directory name: ", __dirname);

console.log("\n" + "-".repeat(60) + "\n");

const filePath = "/siam/project/kamla/workerList.pdf";

console.log("Main path: ", filePath, "\n");
console.log("Directory: ", path.dirname(filePath));
console.log("Base name: ", path.basename(filePath));
console.log("File extension: ", path.extname(filePath));
console.log("File name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(60) + "\n");

const parsed = path.parse(filePath);

console.log("Parsed with object: \n", parsed);

console.log("\n" + "-".repeat(60) + "\n");

console.log("Formatted path: ", path.format(parsed));

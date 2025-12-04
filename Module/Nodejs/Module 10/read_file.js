const fs = require("fs");

// Synchronously
console.log("Start reading synchronous file.....");

try {
  const data = fs.readFileSync("./files/demoReadFile.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error(err.message);
}

console.log("End reading synchronous file.....");

console.log("\n\n");

// Asynchronously
console.log("Start reading asynchronous file...");
fs.readFile("demoReadFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error.message);
  }
  console.log(data);
});

console.log("End reading asynchronous file...");

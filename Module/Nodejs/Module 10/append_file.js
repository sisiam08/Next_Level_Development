const fs = require("fs");

fs.writeFileSync("./files/app.log", "Application started");

console.log("File created..!");

const conten1 = `\n${new Date().toString()} user logged in`;
fs.appendFileSync("./files/app.log", conten1);

console.log("Content1 uploaded..!");

const content2 = `\n${new Date().toString()} data fetched`;
fs.appendFileSync("./files/app.log", content2);

console.log("Content2 uploaded..!");

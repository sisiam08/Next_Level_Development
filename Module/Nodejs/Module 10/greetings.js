const args = process.argv;

// process.args[0] = node path
// process.args[1] = file path
// process.args[2] = first actual argument

const name = args[2] || "guest";
const time = new Date().getHours;

let greedting;

if (time < 12) console.log("Good morning", name);
else if (time < 18) console.log("Good evening!", name);
else console.log("Good night", name);

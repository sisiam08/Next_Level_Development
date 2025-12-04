const os = require("os");

console.log("System Information: \n");

console.log(`Platform Details:`);
console.log(`Platform: ${os.platform}`);
console.log(`Architecture: ${os.arch}`);
console.log(`OS type: ${os.type}`);
console.log(`OS release: ${os.release}`);
console.log(`Hostname: ${os.hostname}`);

console.log("-".repeat(50) + "\n");

console.log(`CPU Details:`);
const cpus = os.cpus();
console.log(`CPU Model: ${cpus[0].model}`);
console.log(`Number of cores: ${cpus.length}`);
console.log(`CPU Speed: ${cpus[0].speed}`);

console.log("-".repeat(50) + "\n");

console.log(`Memory Details:`);
const totalMempry = os.totalmem / 1024 / 1024 / 1024;
const freeMemory = os.freemem / 1024 / 1024 / 1024;
console.log(`Total space: ${totalMempry.toFixed(2)} GB`);
console.log(`Free space: ${freeMemory.toFixed(2)} GB`);

console.log("-".repeat(50) + "\n");

console.log(`Server Uptime Details:`);
const uptime = os.uptime();
const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor(((uptime % 86400) % 3600) / 60);
const seconds = Math.floor(((uptime % 86400) % 3600) % 60);

console.log(
  `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
);

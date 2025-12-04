const crypto = require("crypto");

console.log(`MD5 Hash: \n`);

const password = "password123";
console.log(`Input Password: ${password} \n`);

// MD5
const md5Hash = crypto.createHash("md5").update(password).digest("hex");
const md5Hash2 = crypto.createHash("md5").update(password).digest("hex");

console.log(`MD5 Hashed Password 1: ${md5Hash}`);
console.log(`MD5 Hashed Password 2: ${md5Hash2} \n`); // same as first one //not recommended this hashing method

// SHA256
const sha256Hash = crypto.createHash("sha256").update(password).digest("hex");
console.log(`SHA256 Hashed Password: ${sha256Hash} \n`);

// SHA512
const sha512Hash = crypto.createHash("sha512").update(password).digest("hex");
console.log(`SHA512 Hashed Password: ${sha256Hash} \n`);

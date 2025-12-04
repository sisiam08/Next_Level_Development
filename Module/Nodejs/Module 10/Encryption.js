const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return {
    encryptedData: encrypted,
    ivData: iv.toString("hex"),
  };
}

function decrypt(encryptedData, ivData) {
  const ivBuffer = Buffer.from(ivData, "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);

  let decrypted = decipher.update(encryptedData, "hex", "utf-8");

  decrypted += decipher.final("utf-8");

  return decrypted;
}

const sensitiveData = "My credit card: 4090 4090 4090 3526";

console.log(`Original Data: ${sensitiveData}`);

const encrypted = encrypt(sensitiveData);

console.log(`Encrypted Data: ${encrypted.encryptedData}`);

const decrypted = decrypt(encrypted.encryptedData, encrypted.ivData);
console.log(`Decrypted Data: ${decrypted}`);

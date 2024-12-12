import crypto from "crypto";

// createHash()
// crpyto.hash() - parameter takes the algorithm that you'll use to hash
// const hash = crypto.createHash("sha256");

// hash.update("password1234");
// console.log("hashed pass: " + hash.digest("hex"));

// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString("hex"));
// });

// createCipheriv & createDecipheriv
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
// This takes the password, then from utf-8 it will be enrypted into a hex
let encrypted = cipher.update("Hello, this is a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
// This takes the encrypted password, from hex it will decrypted into a utf8
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);

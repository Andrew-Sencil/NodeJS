// import fs from "fs";
import fs from "fs/promises";

//readFile() - callback
// fs.readFile("./Text.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// //readFileSync() - Sycnhronous version
// const data = fs.readFileSync("./Text.txt", "utf8");
// console.log(data);

// readFile() - from Promise .then()
// fs.readFile("./Text.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./Text.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./Text.txt", "Hello, I am writing to this file");
    console.log("File written to...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./Text.txt", "\nThis is appened text");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  await writeFile();
  await appendFile();
  readFile();
};

main();

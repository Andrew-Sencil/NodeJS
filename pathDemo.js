import path from "path";
import url from "url";

const filepath = "./dir1/dir2/test.txt";

//basename() - This returns the filename despite the directory is even present
console.log(path.basename(filepath));

//dirname() - This returns the directory name without the file
console.log(path.dirname(filepath));

//extname() - This returns the type of file
console.log(path.extname(filepath));

//parse()
console.log(path.parse(filepath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join()
const filepath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filepath2);

// resolve() - this works the same as join
const filepath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filepath3);

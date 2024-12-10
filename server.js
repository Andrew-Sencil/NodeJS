import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  //   res.write("Hello World!");
  //   res.end();

  //   res.setHeader("Content-Type", "text/html");
  //   res.end("<h1>Hello World!</h1>");

  //   res.statusCode = 404;

  // try {
  //   if (req.method === "GET") {
  //     if (req.url === "/") {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end("<h1>Homepage</h1>");
  //     } else if (req.url === "/about") {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end("<h1>About</h1>");
  //     } else {
  //       res.writeHead(404, { "Content-Type": "text/html" });
  //       res.end("<h1>Not Found</h1>");
  //     }
  //   } else {
  //     throw new Error("Method not allowed");
  //   }
  // } catch (error) {
  //   res.writeHead(500, { "Content-Type": "text/plain" });
  //   res.end("Server Error");
  // }

  try {
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        //This retrieve the __dirname, then looks for a folder named 'public' and
        //once inside the it will look for a specific file named 'index.html'
        filepath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        //This retrieve the __dirname, then looks for a folder named 'public' and
        //once inside the it will look for a specific file named 'about.html'
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

//This sends text to the client
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import http from "http";
const PORT = 4000;

const server = http.createServer((req, res) => {
  //   res.write("Hello World!");
  //   res.end();

  //   res.setHeader("Content-Type", "text/html");
  //   res.end("<h1>Hello World!</h1>");

  //   res.statusCode = 404;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

//This sends text to the client
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

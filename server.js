import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.write("Hello World!");
  //   res.end();

  //   res.setHeader("Content-Type", "text/html");
  //   res.end("<h1>Hello World!</h1>");

  //   res.statusCode = 404;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");

  console.log(req.url);
  console.log(req.method);
});

//This sends text to the client
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

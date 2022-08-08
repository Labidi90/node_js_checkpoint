const http = require("http");
const PORT = 3000;

http
  .createServer(function (req, res) {
    res.write("<h1>Hello Node!!!!</h1>");
    res.end();
  })
  .listen(PORT, () => console.log("Server running at http://127.0.0.1:3000/"));

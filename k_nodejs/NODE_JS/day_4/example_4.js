const http = require("http");
const fs = require("fs");

const FILE_PATH = "E:\\Means Stack\\k_nodejs\\NODE_JS\\day_4\\views\\index.html";
const content = fs.readFileSync(FILE_PATH, "utf-8");

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(content);
}

server.listen(3000, () => console.log("Server is running ...."));
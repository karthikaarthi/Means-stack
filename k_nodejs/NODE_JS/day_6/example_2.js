const http = require("http");
const url = require("url");
const fs = require("fs");

const indexHTML = fs.readFileSync("E:\\Means Stack\\k_nodejs\\NODE_JS\\day_5\\views\\index.html", "utf-8");

const server = http.createServer(function(req, res) {

  if (req.url == "/form") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(indexHTML);
  }
  else {  
    const parsedURL = url.parse(req.url);
    console.log(parsedURL)
    console.log("PathName: ", parsedURL.pathname);
    console.log("QuerySting: ", parsedURL.query);
    const data = parsedURL.query.split("&");
    console.log(data[0].split("=")[1]);

  }
  
});

server.listen(3000, () => console.log("Server is running ...."));
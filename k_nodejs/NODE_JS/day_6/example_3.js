const url = require("url");

const newURL = url.format({
  protocol: "http",
  host: "localhost",
  pathname: "/index.html",
  query: {
    userName: "ram",
    email: "ram@gmail.com",
    password: "ram1234"
  }
});

console.log("New URL: " + newURL);
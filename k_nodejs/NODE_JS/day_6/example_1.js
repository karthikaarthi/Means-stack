const url = require("url");

const URL = "https://localhost:8080/index.html?userName=Ram&Age=26&password=ram456456"
const  parsedURL = url.parse(URL);
console.log(parsedURL);
console.log("Protocol: ", parsedURL.protocol);
console.log("Host: ", parsedURL.host);
console.log("HostName: ", parsedURL.hostname);
console.log("Port: ", parsedURL.port);
console.log("QueryString: ", parsedURL.query);
console.log("PathName: ", parsedURL.pathname);
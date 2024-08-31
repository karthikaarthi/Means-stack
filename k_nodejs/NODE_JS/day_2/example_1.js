const fs = require("fs");
const path = require('path')

const FILE_PATH= path.join(__dirname,'Files','bigFile.txt')
const readStream = fs.createReadStream(FILE_PATH, "utf-8");
console.log(readStream)

let i = 1;
readStream.on("data", (chunk) => {
  console.log(chunk); // chunk ==> File data as string
  console.log("Running Count: ", i++);
});


readStream.on("error", (err) => {
  console.log(err.message);
});


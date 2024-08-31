const fs = require("fs");
const path = require('path')


const FILE_PATH= path.join(__dirname,'Files','bigFile.txt')

const writeStream = fs.createWriteStream(FILE_PATH);

writeStream.write("Sample Text");

writeStream.end();

writeStream.on("finish", () => {
  console.log("Finish ...");
});

writeStream.on("error", (err) => {
  console.log(err.message);
});

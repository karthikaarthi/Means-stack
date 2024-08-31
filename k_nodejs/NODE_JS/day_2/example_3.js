const fs = require("fs");
const path = require('path')


const FILE_PATH= path.join(__dirname,'Files','bigFile.txt')
const FILE_PATH1= path.join(__dirname,'Files','bigFile1.txt')


const readStream = fs.createReadStream(FILE_PATH, "utf-8");
const writeStream = fs.createWriteStream(FILE_PATH1);


// readStream.on("data", (chunk) => {
//     writeStream.write(chunk);
//     console.log('Writting completely')

// });

readStream.pipe(writeStream)

writeStream.on("error", (err) => {
  console.log(err.message);
});

readStream.on("error", (err) => {
  console.log(err.message);
});
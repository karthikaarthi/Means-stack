const fs = require("fs");
const path = require('path')

const FILE_PATH= path.join(__dirname,'data','sample.txt')

console.log("Process Start ....");

setTimeout(() => {
  fs.unlinkSync(FILE_PATH);
}, 3000);

console.log("Process End ....");
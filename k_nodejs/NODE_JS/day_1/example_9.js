const fs = require("fs");
const path=require('path')

console.log("Process Start ....");
const FILE_PATH= path.join(__dirname,'dat','sample.txt')

const data = "\nRam,10,ram@gmail.com,ram1234,1000";
  
  fs.appendFileSync(FILE_PATH, data);
console.log("Process End ....");
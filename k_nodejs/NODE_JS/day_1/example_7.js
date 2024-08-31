const fs = require("fs");
const path = require('path')

console.log("Process Start ....");
const FILE_PATH= path.join(__dirname,'data','sampletext.txt')

const data = "Ram,10,ram@gmail.com,ram1234,1000";

fs.writeFileSync(FILE_PATH, data);



console.log("Process End ....");
const fs = require("fs");
const path = require('path')

console.log("Process Start ....");
const FILE_PATH= path.join(__dirname,'data','sample.txt')
const FILE_PATH1= path.join(__dirname,'data','sample1.txt')


fs.copyFileSync(FILE_PATH,FILE_PATH1 );

console.log("Process End ....");
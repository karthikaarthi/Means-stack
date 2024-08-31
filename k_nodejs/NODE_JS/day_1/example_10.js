const fs = require("fs");
const path=require('path')

console.log("Process Start ....");

const FILE_PATH= path.join(__dirname,'data','sample1.txt')

const data = "\nKumar,10,kumar@gmail.com,kumar1234,1000";
fs.appendFile(FILE_PATH, data, (err) => {
  if (err) throw err;
  console.log("Apped file complete ....");
});

console.log("Process End ....");
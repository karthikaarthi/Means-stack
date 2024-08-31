const fs = require("fs");
const path=require('path')

console.log("Process Start ....");

const FILE_PATH= path.join(__dirname,'data','sampletext.txt')

const data = "Sam,10,sam@gmail.com,sam1234,1000";

fs.writeFile(FILE_PATH, "Welcome to all", (err) => {
  if (err) throw err;
  console.log("File write successfully ...");
});
process.on('uncaughtException',(err)=>{
  console.error('this is a uncaught error',err)
})


console.log("Process End ....");
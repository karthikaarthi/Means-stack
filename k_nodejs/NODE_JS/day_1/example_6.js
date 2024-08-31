const fs = require("fs");
const path = require('path')

console.log("Process Start ....");

// const FILE_PATH = "C:\\Web_Tech\\PRACTICE\\GIT_WORKING_DIR\\Cadd_Cae_Computers\\Mean_1\\NODE_JS\\day_1\\Files\\sampleText.txt";

const FILE_PATH=path.join(__dirname,'data','sample.txt')
fs.readFile(FILE_PATH, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Data From File: ", data);
});

console.log("Process End ....");
const fs = require('fs')
const path = require('path')

console.log('Process Start');
const FILE_PATH= path.join(__dirname,'File','sampleText.txt')
const FILE_PATH2= path.join(__dirname,'File','textData.txt')

// fs.rename(FILE_PATH2,FILE_PATH1,(err)=>{
//   if (err) throw err;
//   console.log('rename completely')
// })


fs.renameSync(FILE_PATH,FILE_PATH2)
console.log('Process End.....');
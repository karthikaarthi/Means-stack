
const fs=require('fs')
const path=require('path')

console.log("Process Start ....");
const FILE_PATH=path.join(__dirname,'File','sampleText.txt')
// const FILE_PATH = 'E:\\Means Stack\\nodejs\\NODE_JS\\day_1\\File\\sampleText.txt'

const data=fs.readFileSync(FILE_PATH,"utf-8")
console.log(data)

// fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
//   if (err) throw err;
//   console.log(data)
// })

process.on('uncaughtException',err=>{
  console.error('This is uncaught error',err)
})


console.log("Process End ....");
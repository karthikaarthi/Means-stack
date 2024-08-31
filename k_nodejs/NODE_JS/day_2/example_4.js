const fs = require('fs')
const path = require('path')
const FILE_PATH=path.join(__dirname,'newdir')
console.log('process start ')

if(!fs.existsSync(FILE_PATH)){
  fs.mkdirSync(FILE_PATH,(err)=>{
    if (err) throw err;
    console.log('Directory is created')
  
  })
}



if(fs.existsSync(FILE_PATH)){
  fs.rmdir(FILE_PATH,(err)=>{
    if (err) throw err;
    console.log('Directory is deleted')
  
  })
}


console.log('process End')


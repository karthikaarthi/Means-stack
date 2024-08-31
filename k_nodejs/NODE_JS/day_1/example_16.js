// const fs= require('fs')
const fspromises= require('fs').promises;
const path= require('path')

const FILE_PATH= path.join(__dirname,'data','sample.txt')



const sync = async()=>{
  try{
    console.log('Process Start')

    const data=await fspromises.readFile(FILE_PATH,"utf-8")
    console.log(data)
    console.log('reading completely')

  }
  catch(err){
    console.error(err)
  }
  console.log('Process End')
}

sync()

// fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
//   if(err) throw err;
//   console.log(data)
//   console.log('Reading Completely')
// })


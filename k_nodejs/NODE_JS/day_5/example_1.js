const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const FILE_PATH_index=path.join(__dirname,'views','index.html')
const FILE_PATH_about=path.join(__dirname,'views','about.html')
const FILE_PATH_contact=path.join(__dirname,'views','contact.html')
const FILE_PATH_err=path.join(__dirname,'views','404.html')

const index = fs.readFileSync(FILE_PATH_index,'utf-8')
const about = fs.readFileSync(FILE_PATH_about,'utf-8')
const contact = fs.readFileSync(FILE_PATH_contact,'utf-8')
const err = fs.readFileSync(FILE_PATH_err,'utf-8')


const server=http.createServer((req,res)=>{
  const parsedUrl= url.parse(req.url,true)
  if(parsedUrl.path === '/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(index)
    res.end()
  
  }

  else if(parsedUrl.path === '/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(about)
    res.end()


  }

  else if(parsedUrl.path === '/contact'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(contact)
    res.end()

  }

  
  else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write(err)
    res.end()

  }

})

server.listen(4000,()=>console.log('Server is running on 4000 port'))

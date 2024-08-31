const http=require('http')

const server=http.createServer((req,res)=>{
  res.statusCode= 200;
  res.setHeader('Content-Type','text/html')
  // res.writeHead(200,{'Content-Type':'text/html'})
  res.write(req.url)
  res.write('<h1>Welcome to nodejs</h1>')
  res.write('<a href="/contact">Contact</a>')

  res.end()

})

server.listen(4000,()=>console.log('Server is running on 4000 port'))
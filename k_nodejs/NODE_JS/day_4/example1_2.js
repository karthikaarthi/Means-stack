const http = require('http');
const url = require('url');


const server=http.createServer((req,res)=>{
  const parsedUrl=url.parse(req.url,true)
  if(parsedUrl.pathname === '/'){
    res.writeHead(200,{'ContentType':'text/html'})
    res.write('<h1>Home Page......</h1>')
  
  }

  else if(parsedUrl.pathname === '/contact'){
    res.writeHead(200,{'ContentType':'text/html'})
    res.write('<h1>Contact Page......</h1>')
   
  }

  else if (parsedUrl.pathname === '/about'){
    res.writeHead(200,{'ContentType':'text/html'})
    res.write('<h1>About Page......</h1>')

  }

  else{
    res.writeHead(404,{'ContentType':'text/html'})
    res.write('<h1>File Not Found......</h1>')

  }
  res.end()
})


server.listen(4000,()=>console.log('Server is running on 4000 port.....'))




// const server =  http.createServer((req,res)=>{
//   const parsedUrl= url.parse(req.url,true)
//   console.log(parsedUrl)
//   if(parsedUrl.pathname === '/'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<h1>Home Page</h1>')
//     res.end()
  
//   }

//   else if(parsedUrl.pathname === '/about'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<h1>About Page</h1>')
//     res.end()
  
//   }

//   else if(parsedUrl.pathname === '/contact'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<h1>Contact Page</h1>')
//     res.end()
  
//   }
//   else{
//     res.writeHead(404,{'Content-Type':'text/html'})
//     res.write('<h1> Page Not Found</h1>')
//     res.end()
//   }



// })

// server.listen(7000,(err)=>{
//   if(err)
//     console.log(err)
//   else
//   console.log('Server is running on 4000')
// })
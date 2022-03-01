const { createReadStream } = require('fs')
const http = require('http')

let cnt = 0;

const server = http.createServer((req, res)=>{
if(req.url === '/'){
   return  res.end('Home Page')
}
if(req.url === '/about'){
   return res.end('About Page')
}
if(req.url === '/getData'){
    
   const readStream = createReadStream('./dataFiles/biggdata.txt','utf8')
   readStream.on('open',()=>{
       cnt++
       console.log(`Open event ${cnt} emitted \n`)
       readStream.pipe(res)
   })
/*    readStream.on('data',(result)=>{
    cnt++
     console.log(`Data event ${cnt} emitted \n`)
     console.log(result.length)  
      res.write(result)
   }) 
   readStream.on('end',()=>{
       res.end()
   }) */
return
}
res.writeHead(404)
res.end('Invalid url, please review')
})

server.listen(5050,()=>{
    console.log('Listening on 5050...')
})


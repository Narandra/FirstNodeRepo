const http = require('http');
const {readFileSync, readFile, createReadStream} = require('fs');

const server = http.createServer((req,res)=>{
    const readStream = createReadStream('./dataFiles/bigdata.txt','utf8');
    
    readStream.on('open',()=>{
        readStream.pipe(res);
    })

    readStream.on('error',(err)=>{
        res.write(err);
        res.end();
    })
})

server.listen(4200, (err)=>{
    if(err){
        console.log('server could not be started '+err);
    }
    else{
        console.log('server listening on port 4200...');
    }
})

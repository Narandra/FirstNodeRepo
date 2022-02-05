const {createReadStream} = require('fs');

const readStream = createReadStream('../dataFiles/bigdata.txt',{highWaterMark:100000});

readStream.on('data',(arg)=>{
   // console.log(arg.length);
    console.log(arg);
})

readStream.on('error',(err)=>{
    console.log(err);
})
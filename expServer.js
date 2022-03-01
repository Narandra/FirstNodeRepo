const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));
/*
app.get('/',(req,res)=>{
    let abspath = path.resolve(__dirname,'./html/index.html');
    console.log(abspath);
    res.sendFile(abspath);
})
*/

app.get('/about',(req,res)=>{
    let abspath = path.resolve(__dirname,'./html/about.html');
    console.log(abspath);
    res.sendFile(abspath);
})

app.all('*',(req,res)=>{
    res.status(404).send('Requested page not found, please check the URL');
})

app.listen(5001,()=>{
    console.log('Listening on port 5001...')
})
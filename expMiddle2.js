const express = require('express');
const app = express();
const data = require('./dataFiles/data.js');

app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}))

app.get('/about',(req,res)=>{
  res.status(200).send('About Page');
})

app.post('/login',(req,res)=>{
    //console.log(req.body);
    const {uname} = req.body;
    if(!uname){
        return res.status(401).send('Please enter the name');
    }
    else res.status(200).send(`Welcome ${uname}`)
})

app.listen(5004,()=>{
    console.log('Listening on port 5004...')
})
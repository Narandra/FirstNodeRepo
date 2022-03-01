const express = require('express');
const app = express();
const logger = require('./logger');

/* It is a best practice to move this function to a separate js file similar to logger function */
const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user){
        console.log('User logged in successfully');
        req.user = user;
        next();
    }
    else{
        res.send('User authentication failed');
    }
}

app.use(logger);

app.get('/', authorize, (req,res)=>{
    console.log('Welcome ' + req.user);
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.get('/about/us',(req,res)=>{
    res.send('About Us Page');
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})

app.all('*',(req,res)=>{
    res.status(404).send('Unable to get resource');
})

app.listen(5003,()=>{
    console.log('listening on 5003...');
})
const express = require('express');
const app = express();
const fs = require('fs');
const {Books, Laptops} = require('./dataFiles/data.js');

app.use(express.static('./public'));

app.get('/',(req,res)=>{
 res.end("<a href='/books'>Books</a> <br> <a href='/laptops'>Laptops</a>");
})

app.get('/books',(req,res)=>{
    const booksNew = Books.map((book)=>{
            const {id,name} = book;
            return {id,name};
    })
    res.status(200).json(booksNew);
})

app.get('/books/qry',(req,res)=>{
    console.log(req.query);
    const {name, count} = req.query;
    let booksNew = Books;
    console.log(booksNew);
    if(name){
        booksNew = Books.filter((book)=> book.name.startsWith(name))
    }
    console.log(booksNew);
    if(count){
        booksNew = booksNew.slice(0,count);
    }
    console.log(booksNew);
    res.status(200).send(booksNew);
})

app.get('/books/:id',(req,res)=>{
    console.log(req.params);
    const id = Number(req.params.id);
  //  const id = req.params.id;
    const bookSingle = Books.find((book)=>book.id === id)
    res.status(200).send(bookSingle);
})

app.get('/laptops',(req,res)=>{
    res.json(Laptops);
})

app.all('*',(req,res)=>{
 res.status(404).end('Unable to find the resource');
})

app.listen(5002,()=>{
    console.log('Listening on port 5002...');
})
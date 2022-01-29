const http = require('http');
const server = http.createServer((req, res) => {
 if(req.url === '/'){
    res.write('Welcome Naren');
 }
 if (req.url === '/books'){
   res.write(JSON.stringify([{Title:'Ponniyin Selvan', Price:'Rs.400'},{Title:'Mein Kampf',Price:'Rs.500'},
   {Title:'Kadal Pura',Price:'Rs.1000'}]));
 }
 res.end();
});

server.on('connection',(socket) => {
 console.log('New connection request');
});

server.listen(3000);
console.log('Listening on port 3000..')
const http = require('http');
const fs = require('fs').promises;
const fs1 = require('fs');

const port = 5000;
let data = '';
let img;

async function fn(path) {
    data = await fs.readFile(path, { encoding: 'utf8' });
}

try{
console.log('Trying to read image');
img = fs1.readFileSync('../../Git/Git Capture.JPG');
//console.log(img);
}
catch(err){
    console.log(err);
}

const server = http.createServer((req, res) => {
    
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/':
            res.writeHead(200, { 'content-type': 'text/html' });
            fn('./html/index.html');
            res.write(data);
            break
        case '/about':
            res.writeHead(200, { 'content-type': 'text/html' });
            fn('./html/about.html');
            res.write(data);
            break
        case '/Git%20Capture.JPG':
            console.log('Inside git request case');
            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.write(img);
            break
        default:
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write('Requested Page Not Found');
    }
    res.end();
})

server.listen(port, (err) => {
    if (err) {
        console.log('Error listening to server ' + err);
    }
    else {
        console.log('Listening on port ' + port);
    }  
});
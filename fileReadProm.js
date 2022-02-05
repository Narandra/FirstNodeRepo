const fs = require('fs');
const path = './dataFiles/';
let txt = '';
new Promise((myResolve) => {
    fs.readFile(path + 'file1.txt', 'UTF8', (err, data) => {
        setTimeout(() => {
            console.log('Timeout done');
            if (err) {
                console.log(err);
                return;
            }
            txt = data;
            myResolve();  
        },3000);
        
    })
})
.then(() => {
    return new Promise((myResolve) => {
        fs.readFile(path + 'file2.txt', 'UTF8', (err, data) => {
                  if (err) {
                    console.log(err);
                    return;
                }
                txt = txt + '\n' + data;
                myResolve();
        })
    })
})
.then(()=>{
    return new Promise((myResolve) => {
        fs.writeFile(path + 'file3.txt', txt, 'UTF8', (err) => {
            if (err) { 
                console.log(err); 
                return;
            }
            myResolve();
        });
    });
})
.then(()=>{
    console.log('File Read & Write Successful');
})



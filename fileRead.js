const fs = require('fs');
const path = './dataFiles/';
let txt='';
fs.readFile(path + 'file1.txt', 'UTF8', (err, data) => {
    setTimeout(()=>{
        console.log('Timeout done');
        if(err){
            console.log(err);
            return;
        }
        txt = data;
      //  console.log(txt);
        fs.readFile(path + 'file2.txt', 'UTF8', (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            txt = txt + '\n' + data;
            console.log(txt);
            fs.writeFile(path + 'file3.txt', txt, 'UTF8', (err)=>{
                if(err){ console.log(err);};
            });
        });
    },0);
})

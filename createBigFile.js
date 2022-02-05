const {writeFileSync} = require('fs');
/* Clear the file */
writeFileSync('./dataFiles/bigdata.txt',``,{flag:'w'});

for(let i = 0; i<10000; i++){
writeFileSync('./dataFiles/bigdata.txt',`Hello World ${i} \n`,{flag:'a'});
}

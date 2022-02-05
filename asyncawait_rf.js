const { readFile, writeFile } = require('fs').promises;

/* const { promisify } = require('util');
const readFileP = promisify(readFile);
const writeFileP = promisify(writeFile); */

const path = './dataFiles/';
let txt = '';

async function fn() {
    try {
        txt = await readFile(path + 'file1.txt', 'UTF8');
        txt = txt + '\n' + await readFile(path + 'file2.txt', 'UTF8');
        writeFile(path + 'file3.txt', txt, { encoding: 'UTF8', flag: 'w' });
        console.log('File Read & Write Successful, data follows:');
        console.log(txt);
    }
    catch (err) {
        console.log(err);
    }
}

fn();
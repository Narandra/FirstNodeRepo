const fs = require('fs');
const path = './dataFiles/';
let txt = '';

function f1() {
    return new Promise((myResolve) => {
        setTimeout(() => {
            console.log('Timeout done');
            fs.readFile(path + 'file1.txt', 'UTF8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                txt = data;
                console.log(txt);
                myResolve();
            });
        }, 1000);
    });
}

function f2() {
    return new Promise((myResolve, myReject) => {
        fs.readFile(path + 'file2.txt', 'UTF8', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
            txt = txt + '\n' + data;
            console.log(txt);
            }
            myResolve();
        })
    })
}

function f3() {
    return new Promise((myResolve) => {
        fs.writeFile(path + 'file3.txt', txt, {encoding:'UTF8', flag:'a'}, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(txt);
            console.log('File Read & Write Successful');
            myResolve();
        });
    });
}

async function fn() {
    
        await f1();
        await f2();
        f3();
    
}

fn();
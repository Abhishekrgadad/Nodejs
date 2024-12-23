const { log } = require('console');
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) =>{
    console.log(err,data);
})  

//output for above lines: first finished reading then readfile callback data as it works on non-blocking Io modle.


const a = fs.readFileSync('file.txt');
console.log(a.toString()); //output: first file data then finished reading as sync block the thread to move forward until the current process to be done.

console.log("finished reading file");
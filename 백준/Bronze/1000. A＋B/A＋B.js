const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('n');

let line = input[0].split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a+b);


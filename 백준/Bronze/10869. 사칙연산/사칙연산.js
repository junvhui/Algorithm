const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let a = parseInt(input[0].split(" ")[0]);
let b = parseInt(input[0].split(" ")[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);
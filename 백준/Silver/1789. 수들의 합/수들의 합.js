const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let num = Number(input[0]);

let sum = 0;
let result = 0;


while(sum <= num){
  result++;
  sum += result;
}

console.log(result - 1)



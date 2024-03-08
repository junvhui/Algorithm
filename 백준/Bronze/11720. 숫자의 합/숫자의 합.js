const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")

let N = Number(input[0]);

let arr = input[1].split('').map(Number);

let result = 0;

for(let i = 0; i < N; i++){
  result += arr[i]  
}

console.log(result)
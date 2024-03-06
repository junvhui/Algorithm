const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let number = input[0].split(" ").map(Number)

let a = number[0];
let b = number[1];
let c = number[2];

// 세 개의 수가 모두 같은 경우
if(a == b &&  b == c){
  console.log(10000 + a * 1000)
}
// 두 개의 수가 같은 경우
else if(a == b) console.log(1000 + a * 100)
else if(a == c) console.log(1000 + a * 100)
else if(b == c) console.log(1000 + b * 100)
// 세 개의 수가 전부 다른 경우
else console.log(Math.max(a,b,c) * 100)

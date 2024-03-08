const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")



let TestCase = Number(input[0]);
let NumList = input[1].split(' ').map(Number);

let Max = Math.max(...NumList);


let score = 0;
for(let i = 0; i < NumList.length; i++){
  score += NumList[i]/Max*100
}

console.log(score/TestCase)





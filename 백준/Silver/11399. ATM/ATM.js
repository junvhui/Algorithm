const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let N =  input[0]
let person = input[1].split(" ").map(Number)

let fast_person = person.sort((a, b) =>  a - b);


let time = 0; 
let result = 0;
for(let i = 0; i < N; i++){
  time += fast_person[i]
  result += time
}

console.log(result)


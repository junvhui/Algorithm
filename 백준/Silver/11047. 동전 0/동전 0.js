const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let n = Number(input[0].split(" ")[0]); // 동전의 개수
let money = Number(input[0].split(" ")[1]); // 만들어야 하는 금액

let arr = [];
for(let i = 1; i <= n; i++){
  arr.push(input[i])
}

let count = 0;

for(let i = n-1; i >= 0; i--){
  count += parseInt(money / arr[i]);
  money = money % arr[i]
}

console.log(count)


const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let n = Number(input[0].split(" ")[0])
let k = Number(input[0].split(" ")[1])

let sum = 0;
for(let i = 1; i < k + 1; i++){
  sum += i;
}

if(sum > n) {
  console.log(-1)
}else{
  n -= sum;
  if(n % k == 0) console.log(k - 1)
  else console.log(k)
}

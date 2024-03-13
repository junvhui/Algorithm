const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let sugar = Number(input[0]);

let result = 0;
let flag = false;

while(sugar >= 0) {
  if(sugar == 0 || sugar % 5 == 0){
    result += sugar / 5;
    console.log(result);
    flag = true;
    break;
  }

  sugar -= 3;
  result += 1;
}

if(!flag){
  console.log(-1);
}

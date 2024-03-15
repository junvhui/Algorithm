const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let num1 = Number(input[0].split(" ")[0]);
let num2 = Number(input[0].split(" ")[1]);

let flag = false;
let result = 1;

while (num1 <= num2) {
  if(num1 == num2){
    flag = true;
    break;
  }
  
  if (num2 % 2 === 0) {
    num2 = parseInt(num2 / 2);
  }else if (num2 % 10 === 1) {
    num2 = parseInt(num2 / 10);
  } else {
    break;
  }
  result++;
}
if(flag) console.log(result);
else console.log(-1);


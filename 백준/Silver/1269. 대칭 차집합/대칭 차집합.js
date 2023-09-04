const [n, input1, input2] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
//제출 할때 /dev/stdin으로 수정

//a 원소의 개수, b 원소의 개수
//a 원소들
//b 원소들
// const a = n.split(" ")[0];
// const b = n.split(" ")[1];
const aArr = input1.split(" ");
const bArr = input2.split(" ");

const arr = []
const aaa = arr.concat(aArr, bArr)
const vvv = new Set(aaa)

const num = aaa.length - vvv.size

console.log((aArr.length-num) + (bArr.length-num))
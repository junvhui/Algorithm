const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let N = Number(input[0]);
let arr = [];
for(let i = 1; i <= N; i++){
  arr.push(input[i].split(" ").map(Number))
}

arr.sort(function(a, b){
  if(a[1] !== b[1]) return a[1] - b[1]
  else return a[0] -  b[0]
})

let cnt = 1,  cur = 0;
for(let i = 1; i < N; i++){
  if(arr[cur][1] <= arr[i][0]){
    cur = i;
    cnt += 1;
  }
}

console.log(cnt)

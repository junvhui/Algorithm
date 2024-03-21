const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split("\n")


let N = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

let minCost = cost[0];
for(let i = 0; i < N; i++){
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}


let answer = BigInt(0);
for(let i = 0; i < N - 1; i++){
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(answer))

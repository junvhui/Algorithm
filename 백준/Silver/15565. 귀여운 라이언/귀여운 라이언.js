const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (line) => {
  arr.push(line.split(" ").map((v) => parseInt(v)))
})

rl.on("close", () =>{

  let [N, K] = arr[0].map((v) => Number(v))     // 10, 3
  let dolls = arr[1];                            // 1 2 2 2 1 2 1 2 2 1
  
let count = 0;
let minCount = Infinity;
let i = 0;
let j = 0;

while (j < N) {
  if (dolls[j] === 1) {
    count++;
  }

  while (count === K) {
    if (dolls[i] === 1) {
      count--;
    }
    minCount = Math.min(minCount, j - i + 1);
    i++;
  }

  j++;
}
  
  console.log(minCount === Infinity ? -1 : minCount);


})
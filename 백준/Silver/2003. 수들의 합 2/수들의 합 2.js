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
  const [N, M] = arr[0];
  const nums = arr[1]
  let count = 0;
  
  for(let i = 0; i < N; i++){
      let sum = nums[i];
      let idx = i;
      while(sum < M && idx < N){
          idx++;
          sum += nums[idx];
      }
      if(sum === M) count++;
  }
  
  
  console.log(count)

})
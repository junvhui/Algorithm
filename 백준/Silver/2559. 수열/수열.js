const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];


rl.on("line", (line) => {
    input.push(line.split(" ").map((v) => parseInt(v)))
})

rl.on("close", () => {
    [K, N] = input[0]
    let arr = input[1]
    let sum = [];
    for(let i = 0; i <= K - N; i++){
        let s = 0;
        for(let j = i; j < i + N; j++){
            s += arr[j]
        }
        sum.push(s)
    }
    
    console.log(Math.max(...sum))
    
    
})
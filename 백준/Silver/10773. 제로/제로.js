const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


let input = [];


rl.on("line", (line) => {
    line.split(" ").map((v) => input.push(parseInt(v)))
})

rl.on("close", () => {
    let N = input.shift()
    let stack = [];
    for(let i = 0; i < N; i++){
        if(input[i] > 0){
            stack.push(input[i])
        }else{
            stack.pop();
        }
    }
    
    if(stack.length > 0){
    const sum = stack.reduce((acc, cur) => {
        return (acc + cur)
    })
        console.log(sum)
    }else{
        console.log(0)
    }
})
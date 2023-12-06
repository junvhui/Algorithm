const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


let input = [];


rl.on("line", (line) => {
    line.split(" ").map((v) => input.push(v))
})

rl.on("close", () => {
    const N = parseInt(input.shift())
    for(let i = 0; i < N; i++){
        let stack = 0;
        let answer = [];
        for(let j = 0; j < input[i].length; j++){
            if(input[i][j] === "("){
                stack += 1;
            }else if(input[i][j] === ")"){
                stack -= 1;
                if(stack < 0){
                    break;
                }
            }
            
        }
        if(stack === 0){
                answer.push("YES")
            }else{
                answer.push("NO")
            }
        
        console.log(answer.toString())
    }
  
})
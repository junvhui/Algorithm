const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = 0;

rl.on("line", (line) => {
    arr = line.split(" ").map((v) => parseInt(v))
})

rl.on("close",() => {
    if(arr % 2 === 0){
        console.log("CY")
    }else{
        console.log("SK")
    }
})
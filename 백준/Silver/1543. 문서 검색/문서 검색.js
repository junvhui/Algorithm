const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];


rl.on("line", (line) => {
    line.split("\n").map((v) => input.push(v))
})

rl.on("close", () => {
    let doc = input[0]
    let word = input[1]
    let idx = 0;
    let count = 0;
    while (idx < doc.length) {
        const newIdx = doc.slice(idx).search(word);
        if (newIdx >= 0) {
            count++;
            idx += newIdx + word.length;
        } else break;
    }
    console.log(count);
    })
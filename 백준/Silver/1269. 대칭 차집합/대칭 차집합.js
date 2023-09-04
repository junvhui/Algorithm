let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let [N,M] = [input[0].split(' ')[0],input[0].split(' ')[1]]
let arr1 = input[1].split(' ').map(Number)
let arr2 = input[2].split(' ').map(Number)

function subtraction(a,b){
    let set1 = new Set(a)
    let set2 = new Set(b)    
    let aSubtraction = new Set([...set1].filter((x)=>!set2.has(x))).size
    let bSubtraction = new Set([...set2].filter((x)=>!set1.has(x))).size
    console.log(aSubtraction+bSubtraction)
}

subtraction(arr1,arr2)
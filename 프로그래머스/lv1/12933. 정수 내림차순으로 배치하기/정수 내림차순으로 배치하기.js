function solution(n) {
    let k = n.toString().split("").sort((a,b)=>b-a).join("")
    return parseInt(k);
}
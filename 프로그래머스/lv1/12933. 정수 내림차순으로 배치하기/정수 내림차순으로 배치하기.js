function solution(n) {
    let s = n.toString().split("").sort((a,b)=>b-a).join("")
    return parseInt(s);
}
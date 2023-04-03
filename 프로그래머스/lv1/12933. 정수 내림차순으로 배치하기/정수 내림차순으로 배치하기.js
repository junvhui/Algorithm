function solution(n) {
    var answer = 0;
    let s = n.toString().split("").sort((a,b)=>b-a).join("")
    return parseInt(s);
}
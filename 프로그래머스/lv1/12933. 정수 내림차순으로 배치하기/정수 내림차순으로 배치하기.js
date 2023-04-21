function solution(n) {
    var answer = 0;
    let ss = n.toString().split("").sort((a,b)=>b-a).join("")
    return parseInt(ss);
}
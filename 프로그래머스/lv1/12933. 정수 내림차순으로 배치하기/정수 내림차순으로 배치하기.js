function solution(n) {
    let ss = n.toString().split("").sort((a,b)=>b-a).join("")
    return parseInt(ss);
}
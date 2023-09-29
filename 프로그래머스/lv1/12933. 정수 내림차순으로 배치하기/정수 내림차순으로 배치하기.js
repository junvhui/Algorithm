function solution(n) {
    var k = n.toString().split("").sort((a,b)=>b-a).join("")
    return parseInt(k);
}
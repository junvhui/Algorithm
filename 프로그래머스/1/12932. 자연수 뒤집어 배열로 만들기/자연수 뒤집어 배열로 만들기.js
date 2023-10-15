function solution(n) {
    var s = n.toString().split("").reverse().map(v => parseInt(v));
    return s;
}
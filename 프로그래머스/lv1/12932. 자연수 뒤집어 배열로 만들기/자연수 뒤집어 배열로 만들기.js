function solution(n) {
    let s = n.toString().split("").reverse()
    let k = [];
    for(let i = 0; i < s.length; i++){
        k.push(parseInt(s[i]))
    }
    return k;
}
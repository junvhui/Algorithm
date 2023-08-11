function solution(s) {
    var answer = '';
    var result = s.toLowerCase().split(" ")
    var result2 = result.map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    return result2.join(" ")
}
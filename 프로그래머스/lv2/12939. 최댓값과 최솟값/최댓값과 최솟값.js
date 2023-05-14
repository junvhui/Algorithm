function solution(s) {
    let answer = '';
    let num = s.split(" ")
    let max = Math.max(...num)
    let min = Math.min(...num)
    return min+" "+max;
}
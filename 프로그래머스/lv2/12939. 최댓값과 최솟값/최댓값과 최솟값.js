function solution(s) {
    var num = s.split(" ")
    var max = Math.max(...num)
    var min = Math.min(...num)
    return min+" "+max;
}
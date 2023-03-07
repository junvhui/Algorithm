function solution(my_str, n) {
    var answer = [];
    var split = my_str.split("");
    while(split.length > 0){
        answer.push(split.splice(0, n).join(""))
    }
    return answer;
}
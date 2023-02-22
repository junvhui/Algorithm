function solution(n) {
    var answer = 0;
    var string = n.toString().split("");
    for(let i = 0; i < string.length; i++){
        answer += parseInt(string[i]);
    }
    
    return answer;
}
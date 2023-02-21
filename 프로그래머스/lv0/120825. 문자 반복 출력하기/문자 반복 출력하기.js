function solution(my_string, n) {
    var answer = '';
    var split = my_string.split("");
    for(let i=0; i<split.length; i++){
        answer += split[i].repeat(n);
    }


    return answer;
}
function solution(my_string) {
    var answer = 0;
    var split = my_string.split("")
    for(let i = 0; i < split.length; i++){
        if(Number(split[i])){
            answer += Number(split[i]);
        }
    }
    return answer;
}
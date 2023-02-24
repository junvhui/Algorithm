function solution(my_string) {
    var answer = '';
    var split = my_string.split("");
    for(let i = 0; i < split.length; i++){
        if(split[i] == split[i].toLowerCase()){
            answer += split[i].toUpperCase();
        }else{
            answer += split[i].toLowerCase();
        }
    }
    return answer;
}
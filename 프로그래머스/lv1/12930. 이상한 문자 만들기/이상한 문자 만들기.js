function solution(s) {
    var answer = '';
    var split_s = s.split(" ")
    for(let i = 0; i < split_s.length; i++){
        for(let j = 0; j < split_s[i].length; j++){
            if(j % 2 == 0){
                answer += split_s[i][j].toUpperCase()
            }else{
                answer += split_s[i][j].toLowerCase()
            }
        }
        if (i < split_s.length -1) {
            answer += ' ';
        }
    }
    return answer;
}

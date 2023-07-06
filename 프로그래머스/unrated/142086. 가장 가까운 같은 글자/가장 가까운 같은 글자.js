function solution(s) {
    var answer = [];
    for(let i = 0; i < s.length; i++){
        let result = -1;
        for(let j = i-1; j >= 0; j--){
            if(s[i] === s[j]){
                result = i - j
                break;
            }
        }
        answer.push(result)
    }
    return answer;
}

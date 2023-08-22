function solution(s)
{
    let result = 0;
    let answer = [];
    for(let i = 0; i < s.length; i++){
        if(answer[answer.length - 1] == s[i]){
            answer.pop()
        }else{
            answer.push(s[i])
        }
    }
    if(answer.length > 0){
        return 0;
    }else{
        return 1;
    }
}
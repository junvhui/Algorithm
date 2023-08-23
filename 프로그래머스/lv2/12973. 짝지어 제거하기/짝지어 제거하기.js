function solution(s)
{
    var answer = [];
    for(let i = 0; i < s.length; i++){
        if(answer[answer.length - 1] == s[i]){              // 하나씩 추가하다가 제일 최근에 넣은 값이랑 넣으려는 값이
            answer.pop()                                    // 같다면 빼내고
        }else{
            answer.push(s[i])                               // 다르면 넣음
        }
    }
    if(answer.length > 0){
        return 0;
    }else{
        return 1;
    }
}
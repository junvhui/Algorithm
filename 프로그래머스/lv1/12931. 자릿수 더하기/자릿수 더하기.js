function solution(n)
{
    var answer = 0;
    let s = n.toString().split("")
    for(let i = 0; i < s.length; i++){
        answer += parseInt(s[i])
    }

    return answer;
}
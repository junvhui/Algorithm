function solution(s) {
    var answer = '';
    let l = s.length;
    if(s.length % 2 == 0){
        answer += s[l/2 - 1]
        answer += s[l/2]
    }else{
        answer += s[Math.floor(l/2)]
    }
    return answer
}
function solution(n) {
    var answer = '';
    for(let i = 1; i <= n; i++){
        answer += (i%2!==0) ? "수" : "박"
    }
    return answer;
}
function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            answer.push(i)
        }
    }
    if(n == 0){
        return 0;
    }
    return answer.reduce((a,b) => a+b);
}
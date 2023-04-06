function solution(n, m) {
    var answer = [];
    let max = 0;
    let min = 0;
    if(n < m){
        max = m;
        min = n;
    }else{
        max = n;
        min = m;
    }
    for(let i = max; i > 0; i--){
        if(n % i == 0 && m % i == 0){
            answer.push(i)
            break;
        }
    }
    
    answer.push(n*m/answer[0])
    
    
    return answer;
}
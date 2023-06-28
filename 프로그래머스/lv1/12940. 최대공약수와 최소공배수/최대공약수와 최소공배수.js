function solution(n, m) {
    var answer = [];
    let G = 0;
    let L = 0;
    
    let max = n > m ? n : m
    
    for(let i = 1; i <= max; i++){
        if(m % i == 0 && n % i == 0){
            G = i
        }
    }
    
    L = n * m / G
    answer.push(G, L)
    return answer
}
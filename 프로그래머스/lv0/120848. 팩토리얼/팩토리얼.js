function solution(n) {
    var answer = 1;
    var factorial = '';
    for(let i = 1; i <= 10; i++){
        if(answer * i <= n){
            answer *= i;
            factorial = i;
        }
    }
    return factorial;
}
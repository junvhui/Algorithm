function solution(n) {
    let answer = [];
    for(let i =0; i <= n;i++){
        if (i === 0){
            answer.push(0)
        }
        if (i === 1){
            answer.push(1)
        }
        if (i >=2){
            let sum = answer[i-2] + answer[i-1];
            answer.push(sum % 1234567)
        }
    }
    let result = answer[n] % 1234567
    return result;
}
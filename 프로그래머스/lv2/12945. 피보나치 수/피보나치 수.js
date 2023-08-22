function solution(n) {
    var answer = [];
    for(let i =0; i <= n;i++){
        if (i === 0){                           // 0이면 0넣고
            answer.push(0)
        }
        if (i === 1){                           // 1이면 1넣고
            answer.push(1)
        }
        if (i >=2){                                 // 2이상 부터는
            let sum = answer[i-2] + answer[i-1];    // 이전 값 더해서 
            answer.push(sum % 1234567)              // 그 값을 1234567로 나눈 값을 넣고
        }
    }
    let result = answer[n] % 1234567                // n번째 값 출력
    return result;
}
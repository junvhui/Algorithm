function solution(n){
let result = 0;
    while(n > 0){
        if(n % 2 === 0){    // n이 만약 2의 배수라면
            n /= 2;         // 순간이동 쓰면되니까 그냥 2로 나누어줌
        }else{              // 2의 배수가 아니라면
            n--;            // n 하나 빼주고
            result++           // 뺀 만큼 배터리 + 1
        }
    }

    return result;
}
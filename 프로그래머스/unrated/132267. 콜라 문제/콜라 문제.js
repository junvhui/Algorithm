function solution(a, b, n) {
    let answer = 0;
    while(a <= n){
        answer += parseInt(n/a)*b       // n(가지고 있는 빈병) / a * b(가져다주면 주는 콜라 병 수)
        n = parseInt(n/a)*b + parseInt(n%a) // n을 위에서 받은 콜라에 아까 남은 콜라 더한 값으로 업데이트
    }
    return answer;
}


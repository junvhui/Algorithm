function solution(n){
    
    var result = 0;
    
    while(n > 0){
        if(n % 2 === 0){    // n이 만약 2의 배수라면
            n /= 2;         // 순간이동 쓰면되니까 그냥 2로 나누어줌
        }else{           
            n--;          
            result++       
        }
    }

    return result;
}
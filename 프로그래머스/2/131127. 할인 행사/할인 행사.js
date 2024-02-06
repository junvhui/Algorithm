function solution(want, number, discount) {

    var result = 0;
    
    discount.forEach((v, i) => {                        // discount 첫번째 부터 돌림
        
        let discounts = [...discount].slice(i, i+10)    // discount의 돌리는 인덱스부터 +10 값들을 
                                                        // discounts에 넣음
       
        if(discounts < 10){                             // discounts가 10보다 작으면 이미 10일 연속은 불가하므로
            return result;                              // 종료
        }
        
        var check = 0;                                  
        
        for(let j = 0; j < want.length; j++){           // discounts 필터링해서 want의 값 개수랑 같으면
            if([...discounts].filter((v) => v == want[j]).length === number[j]){
                check ++;                               // 할인 받을 수 있는 상품이므로 +1
            }else{
                break;                                  // 아니면 그냥 종료, 이미 실패
            }
        }
        
        if(check === want.length){                      // for문 다 돌리고나서 check 값과 want의 길이가 같다면
            result ++;                                  // 모든 상품들 할인 받을 수 있으므로 result에 1 추가
        }
        
    })

    return result;

}
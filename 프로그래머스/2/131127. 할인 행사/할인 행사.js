function solution(want, number, discount) {

    let result = 0;
    discount.forEach((v, i) => {                       
        
        let discounts = [...discount].slice(i, i+10)    
                                                       
        if(discounts < 10){                           
            return result;                           
        }
        
        var checks = 0;                                  
        
        for(let j = 0; j < want.length; j++){           // discounts 필터링해서 want의 값 개수랑 같으면
            if([...discounts].filter((v) => v == want[j]).length === number[j]){
                checks ++;                               // 할인 받을 수 있는 상품이므로 +1
            }else{
                break;                                  // 아니면 그냥 종료, 이미 실패
            }
        }
        
        if(checks === want.length){                      // for문 다 돌리고나서 check 값과 want의 길이가 같다면
            result ++;                                  // 모든 상품들 할인 받을 수 있으므로 result에 1 추가
        }
        
    })

    return result;

}
function solution(want, number, discount) {
    let result = 0
    discount.forEach((v,i)=>{	
      //discount 배열을 순회

     let copy=[...discount].slice(i,i+10)
     //현재 인덱스부터 10개의 할인 상품을 복사하여 copy 배열에 저장
     if(copy.length<10)return result
	//배열의 길이가 10 미만이면 종료하고 result 값을 반환
     let flag=0
     //이 변수는 원하는 제품과 수량이 할인 상품 목록에 모두 포함되는지를 체크하는 용도로 사용
     for(let j=0;j<want.length;j++){
       //want 배열을 순회하면서 원하는 제품과 수량을 체크
      if([...copy].filter(el=>el==want[j]).length==number[j]) 
       flag++
	//copy 배열에서 현재 원하는 제품과 동일한 요소들을 필터링한 후, 그 개수가 원하는 수량과 동일한지 체크. 원하는 제품과 수량이 할인 상품 목록에 모두 포함되면 flag 값을 증가
      else break
     }

     if(flag==want.length)result++
	// 원하는 제품과 수량이 할인 상품 목록에 모두 포함되면 result 값을 증가
  })

    return result
}
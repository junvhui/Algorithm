function solution(clothes) {
let answer = 1;
   	let obj={};
    
    clothes.forEach((cloth) => {                    // 옷 각각을 hash로 map
        obj[cloth[1]]=(obj[cloth[1]] || 1) + 1;     // +1 은 하나의 의상만 착용하는 것이 가능해서
    })
    
    for(let key in obj){                            // obj 값 돌면서 값들을 곱해줌
        answer *= obj[key];
    }
    
    return answer-1;                                // 옷을 안입는 경우 : -1 해줌
    
}
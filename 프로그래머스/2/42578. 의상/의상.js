function solution(clothes) {
    let answer = 1;
   	let obj={};
    
    clothes.forEach((cloth) => {
        obj[cloth[1]]=(obj[cloth[1]] || 1) + 1;
    })
    
    for(let key in obj){
        answer *= obj[key];
    }
    
    return answer-1;
    
}
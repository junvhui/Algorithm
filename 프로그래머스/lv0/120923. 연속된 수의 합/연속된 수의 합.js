function solution(num, total) {
    var answer = [];
    let center = Math.floor(total / num)
    answer.push(center)
    for(let i = 1; i <= Math.floor(num/2); i++){
        answer.push(center - i);
        answer.push(center + i);
        answer.sort((a,b)=>a-b)
    }
        if(total % num !==0){
        answer.shift()
}
    
    return answer;
}
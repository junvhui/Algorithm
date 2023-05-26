function solution(numbers) {
    var answer = [];
    for(let i = 0; i < 10; i++){
        if(!numbers.includes(i)){
            answer.push(i)
        }
    }
    return answer.reduce((a,b)=> a+b);
}
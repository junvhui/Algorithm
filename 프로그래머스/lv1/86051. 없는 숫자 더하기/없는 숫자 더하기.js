function solution(numbers) {
    var answer = [];
    var result = [];
    for(let i = 0; i < 10; i++){
        if(numbers.includes(i)){
            answer.push(i)
        }else{
            result.push(i)
        }
    }
    return result.reduce((a,b)=> a+b);
}
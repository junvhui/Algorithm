function solution(numbers) {
    var result = [];
    for(let i = 0; i < 10; i++){
        if(!numbers.includes(i)){
            result.push(i)
        }
    }
    return result.reduce((a,b)=> a+b);
}
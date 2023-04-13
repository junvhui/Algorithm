function solution(numbers) {
    let s = numbers.sort((a,b)=>b-a);
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(s[i]+s[j])
        }
    }
    let result = [...new Set(answer)]
    return result.sort((a,b)=>a-b);
}
function solution(t, p) {
    var answer = [];
    let result = 0;
    let k = p.length;
    for(let i = 0; i <= t.length-k; i++){
        answer.push(t.slice(i, i+k))
    }
    for(let j = 0; j <= answer.length; j++){
        if(parseInt(answer[j]) <= parseInt(p)){
            result++;
        }
    }
    return result;
}
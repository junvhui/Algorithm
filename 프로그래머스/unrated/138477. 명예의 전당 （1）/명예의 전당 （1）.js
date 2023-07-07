function solution(k, score) {
    var answer = [];
    var result = [];
    for(let i = 0; i < score.length; i++){
        if(answer.length < k){
            answer.push(score[i])
            answer.sort((a, b) => a - b)   
            result.push(answer[0])
        }else{
            answer.push(score[i])
            answer.sort((a, b) => a - b)
            answer.shift()
            result.push(answer[0])
            
        }
    }
    return result;
}
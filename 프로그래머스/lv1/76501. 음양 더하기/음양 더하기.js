function solution(absolutes, signs) {
    var answer = [];
    for(let i = 0; i < signs.length; i++){
        if(signs[i] == true){
            answer.push(absolutes[i])
        }else{
            answer.push(absolutes[i] * -1)
        }
    }
    return answer.reduce((a, b) => a + b);
}
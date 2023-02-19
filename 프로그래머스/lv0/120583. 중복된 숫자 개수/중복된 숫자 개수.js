function solution(array, n) {
    var answer = [];
    for(let i = 0; i <array.length; i++){
        if(array[i] === n){
            answer.push(array[i])
        }
    }
    return answer.length;
}
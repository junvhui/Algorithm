function solution(array, n) {
    var answer = [];
    var array_sort = array.sort((a, b)=>a-b);
    for(let i = 0; i < array.length; i++){
        answer.push(Math.abs(array_sort[i] - n));
    }
    var min = Math.min(...answer);
    
    for(let j = 0; j < array.length; j++){
        if(answer[j] == min){
            return array_sort[j];
        }
    }
}
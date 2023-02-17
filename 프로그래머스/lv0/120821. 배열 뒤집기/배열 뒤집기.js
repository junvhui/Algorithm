function solution(num_list) {
    var answer = [];
    var j = num_list.length;
    for(let i = 1; i <= j; i++ ){
        answer.push(num_list[j-i]);
    }
        
    return answer;
}
function solution(order) {
    var answer = 0;
    var number = order.toString();
    for(let i = 0; i < number.length; i++){
        if(number[i] == "3" || number[i] == "6" || number[i] == "9"){
            answer++;
        }
    }
    return answer;
}
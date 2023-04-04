function solution(phone_number) {
    var answer = [];
    for(let i = 0; i < phone_number.length - 4; i++){
        answer.push("*");
    }
    for(let i = phone_number.length - 4; i < phone_number.length; i++){
        answer.push(phone_number[i])
    }
    return answer.join("");
}
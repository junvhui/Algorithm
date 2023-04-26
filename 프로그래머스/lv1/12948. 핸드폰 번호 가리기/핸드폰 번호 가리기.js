function solution(phone_number) {
    let answer = [];
    for(let i = 0; i < phone_number.length - 4; i++){
        answer.push("*");
    }
    return answer.join("") + phone_number.slice(-4);
}
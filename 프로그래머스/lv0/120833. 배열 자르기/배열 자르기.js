function solution(numbers, num1, num2) {
    var answer = [];
    var n1 = num1;
    var n2 = num2;
    for(let i = n1; i <= n2; i++)
        answer.push(numbers[i]);
    return answer;
}
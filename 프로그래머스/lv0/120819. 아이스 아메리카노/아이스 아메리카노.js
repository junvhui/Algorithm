function solution(money) {
    var americano = Math.trunc(money / 5500);
    var left_money = money % 5500;
    var answer = [americano, left_money];
    return answer;
}
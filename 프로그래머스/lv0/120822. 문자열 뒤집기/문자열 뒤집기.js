function solution(my_string) {
    var split = my_string.split(""); //글자를 하나하나 나누고
    var reverse = split.reverse();   //역순
    var answer = reverse.join("");   //글자를 합치고

    return answer;
}
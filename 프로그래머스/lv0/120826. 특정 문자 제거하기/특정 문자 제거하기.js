function solution(my_string, letter) {

    var split = my_string.split(letter);
    var answer = split.join("");

    return answer;
}
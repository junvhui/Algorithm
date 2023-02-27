function solution(my_string) {
    var low = my_string.toLowerCase();
    var answer = low.split('').sort().join('');
    return answer;
}
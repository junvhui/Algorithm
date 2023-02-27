function solution(my_string) {
    var answer = '';
    var set1 = [...new Set(my_string)];
    return set1.join('');
}
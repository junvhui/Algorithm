function solution(bin1, bin2) {
    var answer = '';
    var parse1 = parseInt(bin1, 2);
    var parse2 = parseInt(bin2, 2);
    return (parse1 + parse2).toString(2);
}
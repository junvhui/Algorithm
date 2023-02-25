function solution(my_string, num1, num2) {
    var split = my_string.split("");
    
    [ split[num1], split[num2] ] = [ split[num2], split[num1] ]

    return split.join("");
}
function solution(my_string) {
    var answer = [];
    var split = my_string.split(" ")
    var num = split[0] * 1;
    for(let i = 1; i < split.length; i++){
        if(split[i] === "+"){
           num += split[i+1] * 1;
        }else if(split[i] === "-"){
           num -= split[i+1] * 1;
        }
    }

    return num;
}
function solution(age) {
    var number =["a","b","c","d","e","f","g","h","i","j"];
    var answer ="";
    var age = age.toString();
    for(let i = 0; i < age.length; i++){
        answer += number[age[i]]
    }
    return answer;
}
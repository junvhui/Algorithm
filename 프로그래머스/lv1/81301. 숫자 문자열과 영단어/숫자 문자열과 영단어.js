function solution(s) {
    let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s;
    for(let i = 0; i < number.length; i++){
        let arr = answer.split(number[i])
        answer = arr.join(i)
    }
    
    return parseInt(answer);
}
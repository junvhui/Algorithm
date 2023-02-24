function solution(my_string) {
    let str = my_string.split('');
    const answer = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            answer.push(Number(str[i]))
        }
    }
    return answer.sort((a, b) => a - b);
}
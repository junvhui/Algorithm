


function solution(s, skip, index) {
    var answer = '';
    var alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(v => ![...skip].includes(v));
    let s_arr = [...s]
    for(let i = 0; i < s_arr.length; i++){
        answer += alphabet[(alphabet.indexOf(s_arr[i]) + index) % alphabet.length];
    }
    return answer
}


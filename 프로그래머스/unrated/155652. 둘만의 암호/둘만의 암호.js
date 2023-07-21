function solution(s, skip, index) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabet_filter = [...alphabet].filter(v => ![...skip].includes(v));
    var s_arr = [...s]
    for(let i = 0; i < s_arr.length; i++){
        answer += alphabet_filter[(alphabet_filter.indexOf(s_arr[i]) + index) % alphabet_filter.length];
    }
    return answer
}

/*
a-z 까지 담긴 배열에서 filter를 사용해 skip이 포함하고 있는 v를 필터링함
그리고 answer에는 alphabet에서의 s_arr의 인덱스에 index를 더한 값에 해당하는 글자를 추가 => alphabet 인덱스를 넘을 경우 % alphabet.length를 사용함
*/

/* 실패 코드
function solution(s, skip, index) {
    var answer = '';
    var alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(v => ![...skip].includes(v));
    let s_arr = [...s]
    for(let i = 0; i < s_arr.length; i++){
        let idx = alphabet.indexOf(s_arr[i])
        let new_idx = idx + index > alphabet.length - 1 ? idx +index - alphabet.length : idx + index;
        answer += alphabet[new_idx]
    }
    return answer
}
*/

function solution(s) {
    let answer = [];
    s.substring(2, s.length - 2)                             // 문자열로 바꿔줌
     .split("},{")                                           // '{' '}' 없애기
     .map((e) => e.split(",").map((e) => parseInt(e)))       // 숫자로 변경
     .sort((a, b) => a.length - b.length)
     .forEach((arr) => {                                     
        arr.forEach((v) => {
            if (!answer.includes(v)) {                       // 각각에서 answer에 없는 값들 추가
                answer.push(v);
            }
        });
    });
    
    return answer;
}


// 보고품
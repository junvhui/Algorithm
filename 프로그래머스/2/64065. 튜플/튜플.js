function solution(s) {
    var answer = [];
    s.substring(2, s.length - 2)                             // 문자열로 바꿔줌
     .split("},{")                                           // '{' '}' 없애기
     .map((e) => e.split(",").map((e) => parseInt(e)))       // 숫자로 변경
     .sort((a, b) => a.length - b.length)
     .forEach((arr) => {  
        arr.forEach((v) => {
            if (!answer.includes(v)) answer.push(v);
        });
    });
    
    return answer;
}
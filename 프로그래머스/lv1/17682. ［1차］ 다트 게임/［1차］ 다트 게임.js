function solution(dartResult) {
    var answer = 0;
    var score = 0;
    var cnt = [];
    
    for(let i = 0; i < dartResult.length; i++){
        if (!isNaN(dartResult[i])) {               //만약 숫자라면
            //i-1이 1이고 i가 숫자면 10점
            //그 외의 경우 
            score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        } else if (dartResult[i] === "S") {                 // 보너스 S일때
            cnt.push(score);
        } else if (dartResult[i] === "D") {                 // 보너스 D일때
            cnt.push(Math.pow(score, 2));
        } else if (dartResult[i] === "T") {                 // 보너스 T일때
            cnt.push(Math.pow(score, 3));   
        } else if (dartResult[i] === "*") {                 // 옵션 *일때
            cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;  // 해당 점수와 바로 전에 얻은 점수를 2배로
            cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
        } else if (dartResult[i] === "#") {                 // 옵션 #일때
            cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1]; // 해당 점수를 -로 
    }
  }
    return cnt.reduce((a, b) => a + b);
}
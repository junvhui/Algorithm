function solution(s) {
    var answer = '';
    var index = Math.floor(s.length / 2);
    if(s.length % 2 === 0){             // 짝수일 때
        return s[index-1] + s[index];
    }else{                              // 홀수일 때
        return s[index];
    }

}
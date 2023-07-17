function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    
    for(let i = 0; i < section.length; i++) {
        if(painted < section[i]) {
            painted = section[i] + m - 1;
            answer++;
        }
    }
    
    return answer;
}
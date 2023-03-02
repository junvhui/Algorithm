function solution(i, j, k) {
    var answer = [];
    for(i; i <= j; i++){
        answer += i;
    }
    var cnt = 0;
    var split = answer.split("");
    for(let q = 0; q < split.length; q++){
        if(split[q] == k){
            cnt ++;
        }
    }

    
    return cnt;
}
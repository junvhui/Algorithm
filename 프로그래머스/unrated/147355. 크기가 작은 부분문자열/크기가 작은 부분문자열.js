function solution(t, p) {
    var answer = 0;
    var len = p.length;
    
    for(let i = 0; i < t.length-len+1; i++){
        if(t.slice(i,i+len) <= p){
            answer ++;
        }
    }
    return answer;
}
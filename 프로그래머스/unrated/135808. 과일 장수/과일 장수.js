function solution(k, m, score) {
    var answer = 0;
    var score_idx = 0;
    score.sort((a, b)=>b-a);
    while(score_idx < score.length){
        var new_slice = score.slice(score_idx, score_idx + m);
        score_idx += m;
        if(new_slice.length == m){
            answer += (Math.min(...new_slice) * m)
        }
        
    }
    return answer;
}
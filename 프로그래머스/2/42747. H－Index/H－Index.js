function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>{
        return b-a;                     // [6, 5, 3, 1, 0]
    });
    
    var n = citations.length;
    
    for(var i = 0; i < n; i++) {
        if(i + 1 <= citations[i]) {     // 
            answer++;
        }
    }
    return answer;
}
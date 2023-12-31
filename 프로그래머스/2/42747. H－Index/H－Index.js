function solution(citations) {
    let answer = 0;
    
    citations.sort((a,b)=>{
        return b-a;                     // [6, 5, 3, 1, 0]
    });                                 // [4, 3, 3, 3, 0, 0, 0] => ?
    
    var n = citations.length;
    
    for(var i = 0; i < n; i++) {        // 0, 1, 2, 3, 4
        if(i + 1 <= citations[i]) {     // 1 <= 6, 2 <= 5, 3 <= 3
            answer++;
        }
    }
    return answer;
}
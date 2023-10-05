function solution(n) {
    var answer = 0;
    var t1 = 0 , t2 = 1;
    
    for(let i = 2 ; i <= n + 1 ; i++) {
        answer = t1 + t2 % 1234567;
        t1 = t2;
        t2 = answer;
    }
    return answer % 1234567;
}

// n=1 1
// n=2 2
// n=3 3
// n=4 5
// n=5 8
// n=6 13
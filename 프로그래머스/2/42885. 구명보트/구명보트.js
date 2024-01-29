function solution(people, limit) {
    var answer = 0;
    people.sort ((a,b) => b-a)  // 내림차순 정렬
    // [80,70,50,50]
    var small = people.length - 1;
    for (var i = 0; i <= small ; i++ ) {
        if (people[i] + people [small] <= limit ){  // 제일 큰 사람과 제일 작은 사람 더한 값이 limit 보다 작으면
            small--                                 // 제일 작은 값 --
        }
        
        answer ++
    }
    return answer;
}
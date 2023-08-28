function solution(people, limit) {
    var answer = 0;
    people = people.sort((a, b) => b - a)
    let small = people.length - 1;
    for(let i = 0; i <= small ; i++ ){

        if(people[i] + people[small] <= limit)
            small--
            answer++
        
    }

    return answer;
}
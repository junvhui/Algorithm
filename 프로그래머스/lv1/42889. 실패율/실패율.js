function solution(N, stages) {
    var answer = [];
    var result = [];
    var user = stages.length;       // 총 사용자 수
    
    for(let i = 1; i <= N; i++){
        let challenger = stages.filter((user) => i === user).length;    // 라운드 별 실패인원 
        let fail = challenger / user;                                   // 라운드 별 실패인원 / 총 사용자 수 = 실패율
        user = user - challenger                                        // 총 사용자에서 실패인원 뺌
        answer.push({stage : i, fail : fail})                           // stage : 1 , fail : 0.75 이런 식으로 배열에 넣음
    }
    answer.sort((a, b) => {                         
        return b.fail - a.fail                                          // fail 값 순으로 내림차순 정렬
    });
    for(let i = 0; i < answer.length; i++){
        result.push(answer[i].stage)                                    // answer[0].stage, answer[1].stage 
                                                                        // 이런식으로 담겨 있어서 stage 값만 추출
    }
    return result;
}
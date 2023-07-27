function solution(lottos, win_nums) {
    let answer = [];
    let rank = {0 : 6, 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2, 6 : 1}   // 순위 지정
    let count = 0;
    
    for(let i = 0; i < lottos.length; i++){
        for(let j = 0; j < win_nums.length; j++){
            if(lottos[i] == win_nums[j]){                   // 같으면 카운트 추가
                count += 1;
            }
        }
    }

    answer.push(rank[count])                            //최저순위 
    
    for(let k = 0; k < lottos.length; k++){
        if(lottos[k] == 0){                             // 0인 경우가 다 당첨이라고 가정
            count += 1;                                 // 최고순위
        }
    }
    answer.push(rank[count])
    
    return answer.reverse();
}
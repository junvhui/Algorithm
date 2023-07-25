function solution(lottos, win_nums) {
    var answer = [];
    var rank = {0 : 6, 1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2, 6 : 1}
    let count = 0;
    
    for(let i = 0; i < lottos.length; i++){
        for(let j = 0; j < win_nums.length; j++){
            if(lottos[i] == win_nums[j]){
                count += 1;
            }
        }
    }
    if(count == null){
        count = 6
    }
    answer.push(rank[count])
    
    for(let k = 0; k < lottos.length; k++){
        if(lottos[k] == 0){
            count += 1;
        }
    }
    answer.push(rank[count])
    
    return answer.reverse();
}
function solution(cards1, cards2, goal) {
    var answer = '';
    for(let k of goal){
        if(cards1[0] === k){
            cards1.shift()
        }else if(cards2[0] === k){
            cards2.shift()
        }else{
            return "No";
        }
    }
    return "Yes";
}
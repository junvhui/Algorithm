function solution(clothes) {
    let answer = 1;
    let map = new Map();
    
    for (let i= 0; i < clothes.length; i++) {
        let [c, v] = clothes[i];
        if(map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    }
 
    map.forEach(v => {
        answer *= (v + 1);
    })
    
    answer = answer - 1;
    
    return answer;
}
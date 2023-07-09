function solution(number, limit, power) {
    var div = 0;
    var div_count = 0;
    for(let i = 1; i <= number; i++){
        div = 0;
        for(let j = 1; j <= i/2; j++){
            if(i % j === 0){
                div += 1
            }
        }
        div += 1
        div > limit ? div_count += power : div_count += div
    }
    
    return div_count;
}















/* 시간초과
function solution(number, limit, power) {
    var div = 0;
    var div_count = 0;
    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                div += 1
            }
        }
        div > limit ? div_count += power : div_count += div
        div = 0;
    }
    
    return div_count;
}
*/
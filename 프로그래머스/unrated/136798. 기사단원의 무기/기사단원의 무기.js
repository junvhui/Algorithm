function solution(number, limit, power) {
    let div = 0;
    let div_count = 0;
    for(let i = 1; i <= number; i++){
        div = 0;
        for(let j = 1; j <= i/2; j++){      //약수는 나누는 수의 절반을 넘을 수 없으므로 i/2
            if(i % j === 0){
                div += 1
            }
        }
        div += 1
        div > limit ? div_count += power : div_count += div
        // 만약 div > limit이면 power 값 더하고 아니면 div값 더함
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
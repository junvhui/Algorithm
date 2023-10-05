function solution(brown, yellow) {

    for (var y = 3; y <= (brown+yellow)/y; y++) {   // y는 무조건 3 이상이고 
        var x = Math.floor((brown+yellow)/y);       // x는 전체 개수에서 y 개수를 나눈 값
        if((x-2)*(y-2)=== yellow) {                 // 만약 x-2 * y-2 가 yellow 값이라면
            break;                                  // 종료
        }
    }
 
    return [x,y]; 
}
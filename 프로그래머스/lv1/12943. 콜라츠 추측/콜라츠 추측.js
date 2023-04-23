function solution(num) {
    var cnt = 0;
    if(num == 1){
        return 0;
    }
    for(let i = 1; i <= 500; i++){
        if(num % 2 == 0){
            num = num/2
            cnt++
            if(num == 1){
                return cnt
            }
        }else{
            num = num * 3 + 1
            cnt++
            if(num == 1){
                return cnt
            }
        }
    }
    if(num !== 1){
        return -1;
    }
}
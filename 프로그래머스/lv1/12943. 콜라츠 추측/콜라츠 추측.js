function solution(num) {
    var count = 0;
    if(num == 1){
        return 0;
    }
    for(let i = 1; i <= 500; i++){
        if(num % 2 == 0){
            num = num/2
            count++
            if(num == 1){
                return count
            }
        }else{
            num = num * 3 + 1
            count++
            if(num == 1){
                return count
            }
        }
    }
    if(num !== 1){
        return -1;
    }
}
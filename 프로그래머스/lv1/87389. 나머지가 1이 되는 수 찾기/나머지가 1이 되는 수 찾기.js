function solution(k) {
    for(let i = 1; i < k; i++){
        if(k % i == 1){
            return i;
        }
    }
}
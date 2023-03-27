function solution(common) {
    var answer = 0;
    
    for(let i = common.length; i >= 0; i--){
        if((common[i]-common[i-1]) == (common[i-1]-common[i-2])){
            return common[i] + (common[i]-common[i-1])
        }else if((common[i]/common[i-1]) == (common[i-1]/common[i-2])){
            return common[i] * (common[i]/common[i-1])
        }
    }
}
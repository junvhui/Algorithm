function solution(X, Y) {
    var answer = '';
    
    let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for(let i = 0; i < X.length; i++){
        a[X[i]] += 1;
    }
    for(let i = 0; i < Y.length; i++){
        b[Y[i]] += 1;
    }
    
    for(let i = 9; i >= 0; i--){
        while(true){
            if(a[i] == 0 || b[i] == 0){
                break;
            }
            a[i] -= 1;
            b[i] -= 1;
            answer += i.toString();
        }
    }
    
    if(answer.length == 0){
        return "-1";
    }
    
    if(answer*1 == 0){
        return "0";
    }
    
    return answer;
}
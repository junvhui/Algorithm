function solution(s) {
    var answer = 0;
    var split = s.split(" ")
    for(let i = 0; i < split.length; i++){
        if(split[i] > 0 || split[i] < 0){
            answer += Number(split[i]);
        }else if(split[i] == 'Z'){
            if(split[i-1] > 0){
                answer -= Number(split[i-1]);
            }else{
                answer += Math.abs(Number(split[i-1]));
            }
        }  
        
    }
    return answer;
}
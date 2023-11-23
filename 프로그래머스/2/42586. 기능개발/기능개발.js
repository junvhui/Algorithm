function solution(progresses, speeds) {
    var answer = [];
    var days = 1;
    var count = 0;
    var progress = 0;
    
    while(progresses[0]){
        progress = progresses[0] + (speeds[0] * days);
        if(progress >= 100){
            count++;
            progresses.shift();
            speeds.shift();
        }
        
        else{
            if(count > 0){
                answer.push(count);
            }
            days++;
            count = 0;
        }
    }
    answer.push(count);
    
    return answer;
}
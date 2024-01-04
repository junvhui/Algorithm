function solution(progresses, speeds) {
    let answer = [];                                                // 결과값 배열
    let stack = [];                                                 // 작업 과정 스택
    
    for(let i = 0; i < progresses.length; i++){
        let complete = Math.ceil((100 - progresses[i]) / speeds[i]); // 100에서 progress 뺀 값에서 스피드로 나누는데 2.xx일이 나와도 3일간 작업 후 배포가 가능하므로 Math.ceil
        let lastCompleted = stack[stack.length-1];                  // 가장 최근 완료한 작업
        
        if(stack.length > 0 && lastCompleted.complete >= complete){  // 작업한 내용이 존재하면서 가장 최근 완료한 작업의 소요 일수가 
                                                                    // 현재 진행중인 작업의 진행 일수보다 크거나 같다면
            lastCompleted.count++;                                  // 가장 최근 완료한 작업의 count만 1 증가(stack에 값을 새로 추가하는 것은 없음)
        }else{                                                      // 반대로 작업 내용 없거나, 현재 진행중인 작업의 진행 일수가 크면
            stack.push({ complete, count: 1})                       // stack에 추가
        }
        
    }
    
    answer = stack.map((v) => v.count);                             // {7 , count : 1} 같은 형태로 담겨있으므로 count 값만 뺌
    
    return answer;
}


/*
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
*/
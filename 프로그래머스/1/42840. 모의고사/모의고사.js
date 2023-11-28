function solution(answers) {
    var answer = [];
    var first = [1, 2, 3, 4, 5];
    var second = [2, 1, 2, 3, 2, 4, 2, 5];
    var third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let score = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === first[i % first.length]){
            score[0]++;
        }
         if(answers[i] === second[i % second.length]){
            score[1]++;
        }
         if(answers[i] === third[i % third.length]){
            score[2]++;
        }
    }
    
    let max_value = Math.max(...score)
    
    if(score[0] === max_value){
        answer.push(1)
    }
    if(score[1] === max_value){
        answer.push(2)
    }
    if(score[2] === max_value){
        answer.push(3)
    }

    return answer;
}




/*
function solution(answers) {
    var answer = [];
    
    var s1 = [1,2,3,4,5];
    var s2 = [2,1,2,3,2,4,2,5];
    var s3 = [3,3,1,1,2,2,4,4,5,5];
    var score =[0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(s1[i % s1.length] === answers[i]){
            score[0]++;
        }if(s2[i % s2.length] === answers[i]){
            score[1]++;
        }if(s3[i % s3.length] === answers[i]){
            score[2]++;
        }
    }
    
    const max = Math.max(...score);
    for(let j = 0; j < score.length; j++){
        if(score[j] === max){
            answer.push(j+1);
        }
    }
    return answer;
}
*/
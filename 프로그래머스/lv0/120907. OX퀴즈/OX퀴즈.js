function solution(quiz) {
    let new_quiz = []
    let sum = 0;
    let minus = 0;
    let answer =[];
    for(let i = 0; i < quiz.length; i++){
        new_quiz.push(quiz[i].split(" "))
        
        if(new_quiz[i].includes("+")){
            sum = parseInt(new_quiz[i][0]) + parseInt(new_quiz[i][2])
            if(sum == new_quiz[i][4]){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }else{
            minus = parseInt(new_quiz[i][0]) - parseInt(new_quiz[i][2])
            if(minus == new_quiz[i][4])
                answer.push("O")
            else{
                answer.push("X")
            }
        }
    }
    return answer
}
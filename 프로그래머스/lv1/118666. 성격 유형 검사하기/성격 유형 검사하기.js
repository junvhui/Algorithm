function solution(survey, choices) {
    var types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    let answer = "";
    for(let i = 0; i < choices.length; i++){
        var left = survey[i][0]
        var right = survey[i][1]
        var result = Math.abs(choices[i] - 4)
        if(choices[i] < 4){
            types[left] += result
        }else if(choices[i] > 4){
            types[right] += result
        }
        
    }
    
    var type = Object.keys(types)
    for(let j = 0; j < type.length; j+=2){
        var leftType = types[type[j]]
        var rightType = types[type[j+1]]
        if(leftType >= rightType){
            answer += type[j]
        }else{
            answer += type[j + 1]
        }
    }
    return answer;
}
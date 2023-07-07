function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i < photo.length; i++){
        let result = 0;
        for(let j = 0; j < photo[i].length; j++){
            if(name.includes(photo[i][j])){
                result += yearning[name.indexOf(photo[i][j])]
            }    
        }
        answer.push(result)
           }
    return answer;
}
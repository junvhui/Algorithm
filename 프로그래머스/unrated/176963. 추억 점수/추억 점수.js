function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i < photo.length; i++){
        let value = 0;
        for(let j = 0; j < name.length; j++){
            if(photo[i].includes(name[j])){
                value += yearning[j];
            }
        }
        answer.push(value);
    }
    return answer;
}
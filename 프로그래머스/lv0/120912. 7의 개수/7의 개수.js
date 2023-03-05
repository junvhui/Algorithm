function solution(array) {
    var answer = array.join('');
    var cnt = 0;
    for(let i = 0; i < answer.length; i++){
        if(answer[i] == "7"){
            cnt ++;
        }
    }
    return cnt;
}
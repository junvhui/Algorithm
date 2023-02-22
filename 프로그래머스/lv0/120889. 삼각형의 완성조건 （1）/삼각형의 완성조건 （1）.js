function solution(sides) {
    var answer = 0;
    var array = sides.sort((a,b) => b-a);
    for(let i = 0; i <= sides.length; i++){
        if(array[0] < array[1]+array[2]){
            answer = 1;
        }else{
            answer = 2;
        }
    }
    return answer;
}
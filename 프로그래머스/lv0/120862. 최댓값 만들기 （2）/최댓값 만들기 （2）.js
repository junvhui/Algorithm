function solution(numbers) {
    var answer = 0;
    let sort1 = numbers.sort((a,b) => a-b);
    if(sort1[0] * sort1[1] > sort1[numbers.length -1]*sort1[numbers.length-2]){
        answer =  sort1[0]*sort1[1]
    }else{
        answer =  sort1[numbers.length -1]*sort1[numbers.length-2]
    }
    return answer;
}
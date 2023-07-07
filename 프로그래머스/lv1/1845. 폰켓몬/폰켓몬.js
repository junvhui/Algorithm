function solution(nums) {
    var answer = 0;
    var get = [];
    for(let i = 0; i < nums.length; i++){
        if(!get.includes(nums[i])){
            if(answer < Math.floor(nums.length/2)){
                get.push(nums[i])
                answer++;
            }else{
                break;
            }
            
        }
    }
    return answer;
}
function solution(nums) {
    var pocketMons = {};
    var result = '';
    
    nums.forEach((pocketmon) => {
        pocketMons[pocketmon] = pocketMons[pocketmon] + 1 || 1;

    })
    
    if(Object.keys(pocketMons).length >= nums.length / 2 ){
        result = nums.length / 2
    }else{
        result = Object.keys(pocketMons).length
    }
    
    return result
}
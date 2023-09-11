var permute = function(nums) {
    let result = []
    
    function permutation(nums,i){
        if(i===nums.length){
            result.push(nums.slice())
            return;
        }
        for(let j = i;j<nums.length;j++){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            permutation(nums,i+1);
            [nums[i],nums[j]]=[nums[j],nums[i]];
        }
    }
    permutation(nums,0)
    return result
};
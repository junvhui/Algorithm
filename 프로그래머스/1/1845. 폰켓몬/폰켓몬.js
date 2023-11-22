function solution(nums) {
    var pocketMons = {};
    var result = '';
    
    nums.forEach((pocketmon) => {
        pocketMons[pocketmon] = pocketMons[pocketmon] + 1 || 1;

    })

    
    return Object.keys(pocketMons).length > nums.length / 2 ? nums.length / 2 : Object.keys(pocketMons).length
}



/* Set 사용한 풀이 (Set 까먹고 있었음 ㅠㅠ)
function solution(nums) {
    let answer = 0;
    
    let myBag = [...new Set(nums)];
    let limit = nums.length / 2;
    
    return myBag.length > limit ? limit : myBag.length;
}
*/
function solution(nums) {
    let pocketMons = {};                                            // 포켓몬 Map 만들어줌
    
    nums.forEach((pocketmon) => {
        pocketMons[pocketmon] = pocketMons[pocketmon] + 1 || 1;     // 포켓몬 없으면 1 할당, 있으면 +1

    })

    
    return Object.keys(pocketMons).length > nums.length / 2 ? nums.length / 2 : Object.keys(pocketMons).length
    // 총 마리 수의 절반을 넘을 수 없으므로 절반보다 Map 객체의 키 값이 많으면 nums.length / 2 출력
}



/* Set 사용한 풀이 (Set 까먹고 있었음 ㅠㅠ)
function solution(nums) {
    let answer = 0;
    
    let myBag = [...new Set(nums)];
    let limit = nums.length / 2;
    
    return myBag.length > limit ? limit : myBag.length;
}
*/
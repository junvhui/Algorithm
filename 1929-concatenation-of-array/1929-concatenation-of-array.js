/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var nums2 = [...nums]
    return nums.concat(nums2)
};
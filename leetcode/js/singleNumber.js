// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    res ^= num;
  }
  return res;
};

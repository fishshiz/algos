// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0],
    local = nums[0];
  for (let i = 1; i < nums.length; i++) {
    local = Math.max(nums[i], nums[i] + local);
    max = Math.max(local, max);
  }
  return max;
};

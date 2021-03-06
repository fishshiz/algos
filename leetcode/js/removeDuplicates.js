// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[pointer] !== nums[i]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }
  return pointer + 1;
};

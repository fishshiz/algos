// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (!nums) return false;
  let hash = {};
  for (let i = 0; i <= nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

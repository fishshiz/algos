// Given an array, rotate the array to the right by k steps, where k is non - negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

Array.prototype.reverseLeftRight = function(left, right) {
  if (right >= this.length) return;
  while (left < right) {
    let temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }
};
var rotate = function(nums, k) {
  k = k % nums.length;
  nums.reverse();
  nums.reverseLeftRight(0, k - 1);
  nums.reverseLeftRight(k, nums.length - 1);
};

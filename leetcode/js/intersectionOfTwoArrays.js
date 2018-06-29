// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let hash = {};
  let arr1 = nums1.length > nums2.length ? nums1 : nums2;
  let arr2 = nums1.length > nums2.length ? nums2 : nums1;

  for (let i = 0; i < arr1.length; i++) {
    hash[arr1[i]] = hash[arr1[i]] || 0;
    hash[arr1[i]]++;
  }
  let res = [];
  let count = arr1.length;

  for (let i = 0; i < arr2.length && count !== 0; i++) {
    if (hash[arr2[i]] > 0) {
      hash[arr2[i]]--;
      res.push(arr2[i]);
      count--;
    }
  }
  return res;
};

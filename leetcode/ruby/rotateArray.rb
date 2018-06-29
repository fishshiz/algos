# Given an array, rotate the array to the right by k steps, where k is non-negative.

# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
    return if nums.length < 2
    k = k % nums.length
    copy = nums.dup
    nums.each_index do |idx|
        nums[idx] = copy[-(k)]
        k -= 1
    end
end
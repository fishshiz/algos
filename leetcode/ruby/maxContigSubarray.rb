# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  local = nums[0]
  global = nums[0]
  for num in nums[1..-1]
    local = num + local > num ? num + local : num
    global = local > global ? local : global
  end
  global
end

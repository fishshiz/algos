# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    hash = Hash.new{|h, k| h[k] = false}
    nums.each do |num|
        return true if hash[num]
        hash[num] = true
    end
    false
end

# -----------------------

def contains_duplicate1(nums)
    nums = nums.sort
    nums.each_index do |num|
        return true if nums[num] == nums[num + 1]
    end
    false
end
# Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
# @param {Integer[]} nums
# @return {Integer}

def remove_duplicates(nums)
    return nil if nums.empty?
    pointer = 0
    i = 0
    while i < nums.length
        if nums[pointer] != nums[i]
            pointer += 1
            nums[pointer] = nums[i]
        end
        i += 1
    end
    pointer + 1
end
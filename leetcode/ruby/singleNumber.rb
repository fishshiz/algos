# Given a non-empty array of integers, every element appears twice except for one. Find that single one.

# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    hash = {}
    nums.each do |num|
        if hash[num]
            hash.delete(num)
        else
            hash[num] = num
        end
    end
    hash.keys[0]
end


# ----------------------


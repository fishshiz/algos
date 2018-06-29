# Given two arrays, write a function to compute their intersection.

# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def intersect(nums1, nums2)
    hash = Hash.new {|h, k| h[k] = 0 }
    nums1.each do |el|
        hash[el] += 1
    end
    output = []
    nums2.each do |el|
        if hash[el] > 0
            output << el
            hash[el] -= 1
        end
    end
    output
end
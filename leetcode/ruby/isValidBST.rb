# Given a binary tree, determine if it is a valid binary search tree (BST).

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}


def is_valid_bst(root, min = nil, max = nil) 
    return true if !root
    return false if min && root.val <= min
    return false if max && root.val >= max
    return is_valid_bst(root.left, min, root.val) && is_valid_bst(root.right, root.val, max)
end
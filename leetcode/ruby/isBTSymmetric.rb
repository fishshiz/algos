# Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).

class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left = @right = nil, nil
  end
end

def isSymmetric?(root)
  return true if (!root || (!root.left && !root.right))
  return checkSiblings(root.left, root.right)
end

def checkSiblings(left, right)
  return true if (!left && !right)
  return false if (left.nil? ^ right.nil?)
  return left.val == right.val && checkSiblings(left.left, right.right) && checkSiblings(right.left, left.right)
end

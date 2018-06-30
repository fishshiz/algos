# Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

# For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def buildTree(array)
  return nil if array.length < 1
  idx = array.length / 2
  node = TreeNode.new(array[idx])
  node.left = buildTree(array[0...idx])
  node.right = buildTree(array[idx + 1..-1])
  node
end

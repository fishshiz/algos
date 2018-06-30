# Return the longest path of a Binary Tree.
class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def longestPath(root, path = [])
  copy = path.dup
  return copy if root.nil?
  if copy.nil?
    copy = [root.val]
  else
    copy.push(root.val)
  end
  leftPath = longestPath(root.left, dummy)
  rightPath = longestPath(root.right, dummy)
  leftPath.length >= rightPath.length ? leftPath : rightPath
end

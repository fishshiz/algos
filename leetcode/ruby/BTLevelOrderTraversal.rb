# Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

class TreeNode
attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end


def level_order(root)
    return [] if root.nil?
    output = []
    queue = [root]
    while !queue.empty?
        size = queue.length
        temp = []
        while temp.length < size
            node = queue.pop
            queue.unshift(node.left) if node.left
            queue.unshift(node.right) if node.right
            temp << node.val
        end
        output << temp
    end
    output
end
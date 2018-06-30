// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const levelOrder = root => {
  if (!root) return [];
  const output = [];
  const queue = [root];
  while (queue) {
    const temp = [];
    let size = queue.length;
    while (temp.length < size) {
      let node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      temp.push(node.val);
    }
    output.push(temp);
  }
  return output;
};

// Return the longest path of a Binary Tree.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(1);
a.left = new TreeNode(2);
a.right = new TreeNode(3);
a.left.left = new TreeNode(4);
a.right.left = new TreeNode(5);
a.right.right = new TreeNode(6);
a.right.right.right = new TreeNode(7);

const longestPath = (root, path = []) => {
  let dummy = path.slice();
  if (!root) return dummy;
  if (dummy.length === 0) {
    dummy = [root.val];
  } else {
    dummy.push(root.val);
  }
  const leftPath = longestPath(root.left, dummy);
  const rightPath = longestPath(root.right, dummy);
  return leftPath.length >= rightPath.length ? leftPath : rightPath;
};

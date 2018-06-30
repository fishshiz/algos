// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = array => {
  if (array.length < 1) return null;
  let idx = Math.floor(array.length / 2);
  const node = new TreeNode(array[idx]);
  node.left = buildTree(array.slice(0, idx));
  node.right = buildTree(array.slice(idx + 1));
  return node;
};

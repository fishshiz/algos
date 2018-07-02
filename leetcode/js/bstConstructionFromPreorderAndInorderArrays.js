// Given preorder and inorder traversal of a tree, construct the binary tree.

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 1) return new TreeNode(preorder.shift());
  if (preorder.length < 1) return preorder;
  const root = new TreeNode(preorder.shift());
  let idx = inorder.indexOf(root.val);
  let preSubLeft = preorder.slice(0, idx);
  let inSubLeft = inorder.slice(0, idx);
  let preSubRight = preorder.slice(idx);
  let inSubRight = inorder.slice(idx);
  root.left = buildTree(preSubLeft, inSubLeft);
  root.right = buildTree(preSubRight, inSubLeft);
  return root;
};

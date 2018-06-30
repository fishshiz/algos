// Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const isSymmetric = root => {
  if (!root || (!root.left && !root.right)) return true;
  return checkSiblings(root.left, root.right);
};

const checkSiblings = (left, right) => {
  if (!left && !right) return true;
  if ((!left && right) || (left && !right)) return false;
  return (
    left.val === right.val &&
    checkSiblings(left.left, right.right) &&
    checkSiblings(right.left, left.right)
  );
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let level = 0;
    if (!root) return [];
    const queue = [root];
    const output = [];
    let count = 1;

    while (queue.length > 0) {
        const row = [];
        let i = 0;
        while (row.length < count) {
            let current = queue.pop();
            row.push(current.val);
            if (current.left) {
                queue.unshift(current.left);
                i++;
            }
            if (current.right) {
                queue.unshift(current.right);
                i++;
            }
        }
        count = i;
        level % 2 === 0 ? output.push(row) : output.push(row.reverse());
        level++;
    }
    return output;
};
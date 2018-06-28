function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function inorderTraversalRecursive(root) {
    const output = [];
    if (root) {
        if (root.left) {
            let left = inorderTraversalRecursive(root.left);
            output.push(...left);
        }
        output.push(root.val);
        if (root.right) {
            let right = inorderTraversalRecursive(root.right);
            output.push(...right);
        }
        return output;
    } else {
        return [];
    }
}

function inorderTraversalIterative(root) {
    const stack = [];
    const output = [];
    let current = root;
    while (current !== null || stack.length !== 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        output.push(current.val);
        current = current.right;
    }
    return output;
}
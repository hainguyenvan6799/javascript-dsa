class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const findTarget = (root, target) => {
    if (!root) return false;
    const queue = [ root ];

    while(queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) return true;

        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
    }
}

const findTargetUsingBinaryTree = (root, target) => {
    if (!root) return false;
    if (root.val === target) return true;
    return findTargetUsingBinaryTree(root.left, target) || findTargetUsingBinaryTree(root.right, target);
}
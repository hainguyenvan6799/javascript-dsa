const maxPathSum = root => {
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.val;
    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right))
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(maxPathSum(a))
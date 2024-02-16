class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirst = (root) => {
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current.val);

        current.left && stack.push(current.left);
        current.right && stack.push(current.right);
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirst(a);
// -------------------------------------------------------------------------------------

const depthFistRecursive = (root) => {
    if (!root) return [];
    const left = depthFistRecursive(root.left);
    const right = depthFistRecursive(root.right);
    return [root.val, ...left, ...right];
}

console.log(depthFistRecursive(a));
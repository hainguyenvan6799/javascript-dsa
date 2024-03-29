class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirst = (root) => {
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current.val);

        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
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

breadthFirst(a);
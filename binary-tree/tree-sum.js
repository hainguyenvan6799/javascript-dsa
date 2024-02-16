class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  if (!root) return 0;
  const leftValues = treeSum(root.left);
  const rightValues = treeSum(root.right);
  return root.val + leftValues + rightValues;
};

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

console.log(treeSum(a));
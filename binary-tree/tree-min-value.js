class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const treeMin = (root) => {
    const stack = [root];
    let smallest = Infinity;

    while(stack.length > 0) {
        const current = stack.pop();
        if (smallest > current.val) smallest = current.val;

        current.left && stack.push(current.left);
        current.right && stack.push(current.right);
    }

    return smallest;
  };

  const treeMinRecursive = root => {
    if (!root) return Infinity;
    return Math.min(root.val, treeMinRecursive(root.left), treeMinRecursive(root.right));
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
  
  console.log(treeMinRecursive(a));
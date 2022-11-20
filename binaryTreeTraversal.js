// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// creating a node class
class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a"); // instance of Node class
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// creating a binary tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// // IN-ORDER TRAVERSAL OF BST
const inOrder = function(root) {
  const resultsArray = [];
  const stack = [];   
  while(stack.length > 0 || root !== null) {
    if(root){
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      resultsArray.push(root.val);
      root = root.right;
    }
  }
  return resultsArray;
}
console.log(inOrder(a));

// // PRE-ORDER TRAVERSAL OF BST
const preOrder = (root) => {
  let stack = [];
  let resultsArray = [];
  if(root !== null){
    stack.push(root);
  }
  while(stack.length > 0){
    let current = stack.pop();
    resultsArray.push(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  return resultsArray;
}
console.log(preOrder(a));
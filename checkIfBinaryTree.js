// creating a node class
class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(8); // instance of Node class
const b = new Node(2);
const c = new Node(10);
const d = new Node(1);
const e = new Node(6);
const f = new Node(14);

// creating a binary tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// // IN-ORDER TRAVERSAL OF BST     ---->Left--->Root---->Right
const inOrder = function(root) {
  const resultsArray = [];
  const stack = [];   
  let prev = null;
  while(stack.length > 0 || root !== null) {
    if(root){
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();

      if(prev === null){  // This checks if binary tree is BST
        prev = root;
      } 
      if(prev !== null && root.val < prev.val){
        return false;
      } else {
        prev = root;
      }

      resultsArray.push(root.val);
      root = root.right;
    }
  }
  return resultsArray;
}
console.log(inOrder(a));

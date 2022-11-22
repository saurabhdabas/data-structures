// creating a node class
class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(8); // instance of Node class
const b = new Node(22);
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
const isBST = function(root) {
  function helper(root, min, max){
    if (!root){
        return true
    }
   
   if ((min !== null && root.val <= min) || (max !== null && root.val >= max)){
       return false
   }
   
   return helper(root.left, min, root.val) && helper(root.right, root.val, max)
}

return helper(root, null, null)
}
console.log(isBST(a));

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

// Traversing the binary tree 
const treeTraversal = (root) => {
  if(root === null){
    return [];
  }
  const resultsArray = [];
  const stack = [ root ];    // Array.push and Array.pop
  while(stack.length > 0) {
    const current = stack.pop();
    resultsArray.push(current.val);
    console.log(current.val);
    if(current.right)stack.push(current.right);
    if(current.left)stack.push(current.left);
  }
  return resultsArray;
}

// treeTraversal(a);

// Searching a node in a binary tree

const search = (root,value) => {
  if(root === null)return 'Tree is Empty';
  if(root.val === value) return 'Value exists';
  const stack = [root];
  while(stack.length > 0){
    const current = stack.pop();
    if(current.val === value) return 'Value exists';
    if(current.right)stack.push(current.right);
    if(current.left)stack.push(current.left);
  }
  return "value doesnot exists";
}

// console.log(search(a,'k'));

const arr = [[1,2],[3,4],[5,6]];
const transpose = () => {
  let transposedArray = [];

  for(let i = 0; i < arr[0].length ; i++){
    let newRow = [];
    for(let j = 0; j < arr.length ; j++) {
      newRow.push(arr[j][i]);
    }
    transposedArray.push(newRow);
  }
  return transposedArray;
}
// console.log(transpose(arr));
const multiply = (num1) => {
  return (num2) => {
    return num1*num2;
  }
}
console.log(multiply(5)(2));

class Node {
  constructor(val){
         this.val=val
         this.next=null
  }
}
class LinkedList {
  constructor(){
         this.head=null
  }
  // method to add a node to end of the linked list
  append(val){
         // handles very first append to linked list, when list is empty
         if(this.head === null){
                this.head = new Node(val)
                return;
         }
         let curr = this.head
         while(curr.next !== null){         // Keep looping until you hit the tail
                curr = curr.next
                console.log('curr:',curr);
         }
         curr.next = new Node(val)
  }

  // method to print a linked list
  print(){
         let str='';
         let curr = this.head
         while(curr !== null) {
                str += curr.val + '-->';
                curr = curr.next
         }
         return str;
  }

  // method to search if a value exists in linked list

  contains(val){
         let curr = this.head;
         while(curr !== null){
              if(curr.val === val){
                return true
              } 
              curr = curr.next
         }
         return false
  }

  // method to return total sum of the values in linked list
  sum(){
         let sum = 0;
         let curr = this.head
         while(curr !== null){
                sum += curr.val
                curr = curr.next
         }
         return sum;
  }

  // find a node at given index

  getNodeValue(index){
         let count = 0;
         let curr = this.head
         while(curr !== null){
                if(count === index) return curr.val
                curr = curr.next
                count += 1;
         }
  }

  // Reverse a linked list
  reverseList(){
         let curr = this.head
         let prev = null
         while(curr !== null){
                const next = curr.next
                prev = current
                curr = next
         }
  }
}

let list = new LinkedList();
// list.append(2);
// list.append(8);
// list.append(3);
// list.append(7);
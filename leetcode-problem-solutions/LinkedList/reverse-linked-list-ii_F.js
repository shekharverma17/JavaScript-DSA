
/* 

https://leetcode.com/problems/reverse-linked-list-ii/



 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(left === right) head;
    let rightNode = null;
    let rightPrev = null
    let leftNode = null
    let leftPrev = null
    let prev = null
    let tempHead = head;
    while(head.next){
        if(head.val === left){
            leftNode = head
            leftprev = prev
        }
        if(head.right === right){
           rightNode = head
           rightPrev = prev 
        }
        if(rightNode && leftNode){
           rightNode.next = leftNode.next
           leftPrev.next = rightNode;
            
            leftNode.next = rightNode.next
            rightPrev.next = leftNode
            
            head = leftPrev;
            break;
        }else{
        prev = head;
        head = head.next
        }

    }
    console.log(head)
    //head = leftprev;
    return head;
};

//1 point to 4
//4 point to 3
//3 point to 2
//2 point 5


// temphead = head;
// tempPrev = null //1
// next
// temp.head === left => true then 
// holdright = tempHead
// holdPrev = 1
// HoldNext = 2
// searchLeft = true

// next = 3
// prevNode = 3
// next = 4 => true right then
// holdleft = curr
// curr.next = holdright.next
// holdright.next.next =holdright
// tempPrev.next = curr
/* 
https://leetcode.com/problems/reverse-linked-list-ii/


function reverseBetween(head, m, n) {
    const before = { next: head };
    let prev = before;
  
    while (--m) {
      prev = prev.next;
      --n;
    }
  
    let curr = prev.next;
    while (--n) {
      let next = curr.next;
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
    }
  
    return before.next;
  } */
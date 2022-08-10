/**
 * 
 * 
 * https://leetcode.com/problems/palindrome-linked-list/submissions/
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
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
 * @return {boolean}
 */
 const isPalindrome = function(head) {
    let stack = [];
    let temphead = head;
    while(temphead){
        stack.push(temphead.val);
        temphead = temphead.next
    }
    while(head){
        if(stack.pop() !== head.val) return false;
        head = head.next
    }
    return true;
    
};


 var isPalindrome = function(head) {
    let stack = [];
    let isPalin = [];
    let temphead = head;
    while(temphead){
        stack.push(temphead.val);
        temphead = temphead.next
    }
    console.log(stack)
     console.log(head)
    let i = stack.length-1;
    while(i >= 0){
       // console.log(`stack.pop()====${stack.pop()}`)
      //  console.log(`head.val====${head.val}`)
        if(stack[i] != head.val){
           return false;
        }
        head = head.next
        i--;
    }
    return true;
    
};
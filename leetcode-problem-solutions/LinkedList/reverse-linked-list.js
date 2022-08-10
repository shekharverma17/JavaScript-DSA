
/* 
https://leetcode.com/problems/reverse-linked-list/

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
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null;
    let curr = head;
        while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        }
        return prev
    };

/* 

    https://leetcode.com/problems/reverse-linked-list/discuss/1552966/JavaScript-Solutions

     */

    var reverseList = function(head) {
        if(head === null) return head;   
        
        let node = head;     
        let prev = null;
        
        while (node) {
            let saveNext = node.next
            node.next = prev;
            prev = node;        
            node = saveNext;        
        }
        
        return prev;
    };
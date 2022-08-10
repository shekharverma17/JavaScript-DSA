/**
 * 
 * 
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/submissions/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    let arr = []
    let temp = head;
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    let maxSum = 0;
    let n = arr.length;
    for(i=0;i<n;i++){
        if(maxSum < arr[i]+ arr[n-1-i]) maxSum = arr[i]+ arr[n-1-i] 
    }
    return maxSum;
};

//Runtime: 89 ms
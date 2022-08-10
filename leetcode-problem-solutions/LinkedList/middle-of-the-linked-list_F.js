/* 
https://leetcode.com/problems/middle-of-the-linked-list/

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Run fast pointer two time in loop and slow once (current_node.next().next()  
1.2.3 fast =>3, 
3.4.5 fast=> 5, 
5.6.7 ,,, 
7.8.9.
9.10.null

fast is null break

exmple: node sie 10
fast will run two time  fast 5*2 = 10
slow= slow5*1 = 5 return 5 this is result
 */

var middleNode = function(head) {
    let fast = slow = head; //1
    console.log(`slow===${JSON.stringify(slow)}`); //slow==={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
    while (fast && fast.next) {
        fast = fast.next.next; //fast: 3 //fast: 5 //null
        slow = slow.next; //slow: 2 //3 //4
        console.log(slow); //[2,3,4,5] //[3,4,5]
        
    }
    console.log(`slow==result===${JSON.stringify(slow)}`); //slow==result==={"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}
    return slow;
};
/* 

Your input
[1,2,3,4,5]
stdout
slow==={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
[2,3,4,5]
[3,4,5]
slow==result==={"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}

Output
[3,4,5]
Expected
[3,4,5]

https://leetcode.com/problems/middle-of-the-linked-list/discuss/569428/JavaScript-two-O(N)-solutions

Two pointer
Time Complexity: O(N)
Space Complexity: O(1)
lo = 1 * iteration
hi = 2 * iteration
/**
 * @param {ListNode} head
 * @return {ListNode}
 
var middleNode = function(head) {
    let lo = head, hi = head;
    while (hi && hi.next) {
        lo = lo.next;
        hi = hi.next.next;
    }
    return lo;
};
Count N & Move N // 2
Time Complexity: O(N + N) = O(N)
Space Complexity: O(1)
/**
 * @param {ListNode} head
 * @return {ListNode}
 
var middleNode = function(head) {
    let hi = head, cnt = 1;
    while (hi.next) {
        hi = hi.next;
        cnt++;
    }
    cnt = parseInt(cnt / 2);
    while (cnt--) {
        head = head.next;
    }
    return head;
};
javascript
Comments: 1
BestMost VotesNewest to OldestOldest to Newest
Type comment here... (Markdown is supported)

Preview

Post
bemad123's avatar
bemad123

11
December 29, 2021 12:09 AM

Read More
Your code is much cleaner.. I had done something similar as your second approach.
My solution with Runtime faster than 96.62% and memory less than 78.82%:

var middleNode = function (head) {
    count = 0
    let copy = head
    while (head) {
        count += 1
        head = head.next
    }
    target = Math.floor(count / 2)
    count = 0
    while (count < target) {
        copy = copy.next
        count += 1
    }
    return copy
}; */
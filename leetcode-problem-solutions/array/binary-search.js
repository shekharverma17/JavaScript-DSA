/* 

https://leetcode.com/problems/binary-search/submissions/ 

*/
const search = function(nums, target) {
    let leftIn = 0, rightIn = nums.length-1
    while(leftIn <= rightIn){
         let middleIn = Math.floor((leftIn + rightIn)/2), middleVal = nums[middleIn];
        if(target === middleVal) return middleIn;
        ( target < middleVal) ? rightIn = middleIn - 1 :  leftIn = middleIn + 1;
    }
    return -1;
};
/* 
Runtime: 99 ms, faster than 46.53% of JavaScript online submissions for Binary Search.
Memory Usage: 44.9 MB, less than 69.75% of JavaScript online submissions for Binary Search.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


https://leetcode.com/problems/binary-search/discuss/1884068/Python-Javascript-Easy-solution-with-very-clear-Explanation */
/**
 * 
 * https://leetcode.com/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let obj = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(obj[target - n] !== undefined) {
			return [obj[target - n], i];
		}
		obj[n] = i;
	}
	return [];
}

/* 
Success
Details 
Runtime: 74 ms, faster than 92.66% of JavaScript online submissions for Two Sum.
Memory Usage: 42.5 MB, less than 67.90% of JavaScript online submissions for Two Sum.

https://leetcode.com/problems/two-sum/discuss/2377087/100-Fastest-Solution-Explained
https://leetcode.com/problems/two-sum/discuss/234005/Neat-JavaScript-Map-O(n)
 */

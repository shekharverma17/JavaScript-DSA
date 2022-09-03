/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/house-robber-ii/submissions/
 * 
 */
 var rob = function(nums) {
    let n = nums.length
    if(n === 1) return nums[0]
    function helper(start, end){
        let maxRob = preRob = 0
        for(i=start; i<end; i++){
           let newRob = Math.max(nums[i] + preRob, maxRob)
           preRob = maxRob
           maxRob = newRob
        }
        return maxRob
    }
    
    return Math.max(helper(0, n-1), helper(1, n))
};
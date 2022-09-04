/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/house-robber/
 * https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
 */
 var rob = function(nums) {
    let maxRob = preRob = 0;
    for(const n of nums){
        let temp = Math.max(n + preRob, maxRob)
        preRob = maxRob
        maxRob = temp
    }
    return maxRob
};
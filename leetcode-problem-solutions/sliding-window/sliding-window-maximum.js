/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let r =0, l=0; 
    let res = [];
    for(r=0; r<=nums.length-k;r++){
      let max =0
      let win = 0
        while(win<k){
            max = Math.max(max, nums[r+win])
            // sum += nums[r+win] 
            win++
        }
        res.push(max)
    }
    return res
};

[1,3,-1,-3,5,3,6,7]
3
[1,-1]
1
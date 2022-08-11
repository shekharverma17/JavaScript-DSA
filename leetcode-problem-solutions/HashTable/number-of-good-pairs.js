/* 

https://leetcode.com/problems/number-of-good-pairs/submissions/

 */
var numIdenticalPairs = function(nums) {
    let objGP = {}
    let objNums= {}
    for(i=0;i<=nums.length; i++){
        if(nums[i] && nums[i] === objNums[nums[i]]){
             objGP[nums[i]] = objGP[nums[i]] === undefined ? 2 : objGP[nums[i]] + 1
        }
        objNums[nums[i]] = nums[i];
      
    }
    let gpCount = 0;
    for (const property in objGP) {
         gpCount += (objGP[property]*(objGP[property] - 1))/2
    }
    return gpCount;
};
/* 

https://leetcode.com/problems/number-of-good-pairs/discuss/742796/2-lines-in-JavaScript-using-counter-for-O(n)-brute-O(n2)
Short and sweet:

function numIdenticalPairs(nums) { // O(n)
  const map = nums.reduce((m, n, i) => m.set(n, (m.get(n)||0) + 1), new Map());
  return [...map.values()].reduce((num, n) => num + n * (n - 1) / 2, 0);
};
https://leetcode.com/problems/number-of-good-pairs/discuss/911686/Clean-JavaScript-Solution
 */
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    
    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};

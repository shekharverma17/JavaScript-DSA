/* 

https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/ 

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    let count = 0;
    for(i=0;i<nums.length; i++){
        for(j=1+i; j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j]) === k){
                count++;
            }
        }
    }
    return count;
};

https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/discuss/2137761/JavaScript-2-Approaches-O(n2)-and-O(n)

JavaScript - 2 Approaches - O(n^2) and O(n)

    // O(n^2) - simple solution
     nums.sort((a,b) =>a-b)
     let count=0;
     console.log(nums)
     for(let i=0;i<nums.length;i++){
         for(let j=i+1;j<nums.length;j++){

          if((nums[j]-nums[i])===k) count++;
    } 
    }
    return count;

//   O(n) - Using Faster method
	let map={} 
	for(let i of nums){
		map[i]?map[i]++:map[i]=1
	}
	let count =0; 
	for(let i=0;i<nums.length;i++){
		if(map[nums[i]-k]) count +=map[nums[i]-k]
	}
	return count;



    var countKDifference = function(nums, k) {
        let map = {};
        for(let i of nums) {
            map[i] ? map[i]++ : map[i] = 1 
        }
        
        let pairs = 0;
        
        for(let i = 0; i<nums.length; i++) {
            if(map[nums[i]-k]) {
                pairs += map[nums[i] - k]
            }
        }
        
        return pairs;
        
    };
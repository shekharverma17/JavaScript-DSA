/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b)=>a-b) //sort array
    let ans = []      
    nums.forEach((v, i) => { /*loop array with value v and index i */
    if(i>0 && v === nums[i-1]) return; /* check if same value then don't use that value in same place, return will skip loop. Ex:[-2,-2,0,1,2,2] we are going to skip second -2 bcz -2 is duplicate */
        
        let l = i+1, r = nums.length-1; /* set left l and right pointer */
        
        while(l<r){ /* while left pointer l is less than right point r*/
            let threesum = v+nums[l]+nums[r] 

            if(threesum > 0){
                r-- /*this means in sorted array we need to reduce are right pointer value to decrease sum */
            }else if (threesum < 0){
                l++ /* here we need to increase left pointer to increase sum*/
            }else{
                ans.push([v, nums[l], nums[r]]) // we got ans push as array
                l++; /* increament left pointer bcz we we find new combination */
                while(nums[l] == nums[l-1] && l < r) l++; /*if left pointer l value is same as previous then we need to find next value which is not same as previous*/
            }
        }
    });
    
return ans
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let ans = []      
    nums.forEach((a, i) => {
     if(i>0 && a === nums[i-1]) return;
    
    let l = i+1, r = nums.length-1;
        while(l<r){
        let threesum = a+nums[l]+nums[r]
        if(threesum > 0){
            r--
        }else if (threesum < 0){
            l++
        }else{
            ans.push([a, nums[l], nums[r]])
            l++;
            while(nums[l] == nums[l-1] && l < r) l++;
        }
        }
    });
    
return ans
};
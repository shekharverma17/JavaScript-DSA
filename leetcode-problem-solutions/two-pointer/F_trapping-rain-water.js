

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let l = 0, r = height.length-1, count = 0;
     let maxL = height[0], maxR = height[r]
    
    while(l<r){
        const left = height[l], right = height[r]
        if(left > maxL) maxL = left
        if(right > maxR) maxR = right

        if(maxL-left > 0) count += maxL-left
        if(maxR-right > 0) count += maxR-right
        
        left > right ? r-- : l++
    }
    return count
};

/**
 * 
 * https://leetcode.com/problems/trapping-rain-water/submissions/
 * 
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let maxL = height[0]
    let maxR = height[height.length-1]
    
    let l = 0
    let r = height.length-1
    let count = 0;
    while(l<r){
        if(height[l]> maxL){
            maxL = height[l]
        }
        if(height[r]> maxR){
            maxR = height[r]
        }
        if(height[l] < height[r]){
           l++;
         }else{
            r--;
         }
        if(maxL-height[l] > 0){
            count += maxL-height[l]
        }
        if(maxR-height[r] >0) {
            count += maxR-height[r] 
        }
    }
    return count
};
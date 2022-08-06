/* 
https://leetcode.com/problems/intersection-of-two-arrays/
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

//remove duplicate
    //check length and loop smaller array
    //if includes then push into result array 
 */
    const intersection = function(nums1, nums2) {
        const uniqNums1 = [...new Set(nums1)];
        const uniqNums2 = [...new Set(nums2)];
        const result = [];
         for(i=0;i<uniqNums1.length;i++){
             if(binarySearch(uniqNums2, uniqNums1[i])){
                result.push(uniqNums1[i]);
              }
         }
     
         return result;
     };
     
     function binarySearch(arr, target){
         const sortedArr = arr.sort((a,b)=> a-b)
         let leftIndex = 0;
         let rightIndex = sortedArr.length-1
         while(leftIndex <= rightIndex){
               let middleIndex = Math.floor((leftIndex + rightIndex)/2)
               if(target === arr[middleIndex]) return true;
              if( target < arr[middleIndex]){
                  rightIndex = middleIndex - 1;
              }else{
                  leftIndex = middleIndex + 1;
              }         
         }
         return false;
     }
     
 /*     
    DSA: array and set for uniq array and then loop and binary search
     Runtime: 178 ms, faster than 5.14% of JavaScript online submissions for Intersection of Two Arrays.
     Memory Usage: 48.8 MB, less than 5.27% of JavaScript online submissions for Intersection of Two Arrays.
     
      */
     
     /**
      * @param {number[]} nums1
      * @param {number[]} nums2
      * @return {number[]}
      */
     const intersection = function(nums1, nums2) {
         let set = new Set(nums1);
         let set2 = new Set(nums2);
         let result = [];
         for (const val of set) {
             if (set2.has(val)) {
                 result.push(val);
             }
         }
         return result;
     };
     console.log(intersection([1,2,2,1], [2,2]));
     console.log(intersection([4,9,5], [9,4,9,8,4]));
    /*  
     https://leetcode.com/problems/check-if-n-and-its-double-exist/discuss/791983/JavaScript-Hash-Table-or-Set-Space-Time-Complexity-Analysis#:~:text=Similar%20to%20an%20object%20and,complexity%20of%20O(n).
     
     https://leetcode.com/problems/intersection-of-two-arrays/discuss/82187/JavaScript-solution-with-Set
     https://leetcode.com/problems/intersection-of-two-arrays/discuss/271311/javascript-solution
     
     JavaScript solution with Set
      */
     function intersection(nums1, nums2) {
         const set = new Set(nums1);
         return [...new Set(nums2.filter(n => set.has(n)))];
     }
     
  /*    Runtime: 60 ms
     
     
     Simple JavaScript Solution | HashSet | Time - O(N)
     9 VIEWS */
     /**
      * @param {number[]} nums1
      * @param {number[]} nums2
      * @return {number[]}
      */
     const intersection = function(nums1, nums2) {
         let set = new Set(nums1);
         let set2 = new Set(nums2);
         let result = [];
         for (const val of set) {
             if (set2.has(val)) {
                 result.push(val);
             }
         }
         return result;
     };
     /* 
     ————————————
     
     https://leetcode.com/problems/intersection-of-two-arrays/discuss/285818/javascript-solutions%3A-brute-force-hashmap-set */
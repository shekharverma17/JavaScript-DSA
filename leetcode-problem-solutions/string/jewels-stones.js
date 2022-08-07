/**
 * 
 * https://leetcode.com/problems/jewels-and-stones/
 * 
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 const numJewelsInStones = function(jewels, stones) {
    let count = 0
    const jewelsSet = new Set(jewels)
    for(i=0; i<stones.length; i++) if(jewelsSet.has(stones[i])) count++
    return count;
  };
/*   
  Runtime: 74 ms, faster than 83.38% of JavaScript online submissions for Jewels and Stones.
  Memory Usage: 42.1 MB, less than 77.12% of JavaScript online submissions for Jewels and Stones.

  https://leetcode.com/problems/jewels-and-stones/discuss/?currentPage=1&orderBy=most_votes&query=javascript%20o%28n%29
  
   */



  sample 100 ms submission
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
     return stones.replaceAll(new RegExp('[^' + jewels + ']', 'g'), "").length
};



//  var numJewelsInStones = function(jewels, stones) {
//     let count = 0;
//     jewels.split('').map(char =>{
//      for(i=0; i<stones.length; i++){
//        if(stones[i] === char) count++
//      }
//     })
//     return count;
//   };
  
  
  //bruteForce:
  // search each jewels char in stones and increase count if exist and return
  // 1. str1 is already uniq, make stones uniq
  // and create uniq hash and use has method
  
  //complexcity
  //algorigtham
  //ds: string
  //type/patern of problem:
  //edge cases:


  // var numJewelsInStones = function(jewels, stones) {
//   let count = 0;
//   jewels.split('').map(char =>{
//    if(jewels_set.has(char)) count++;
//   })
//   return count;
// };


var numJewelsInStones = function(jewels, stones) {
    //let count = 0;
    const jewels_set = new Set(jewels)
    return stones.split('').reduce((acc, s)=> acc + jewels_set.has(s),0)
    //const jewels = new Set(J)
    //  return S.split('').reduce((res, s) => res + jewels.has(s), 0)
  //  for(i=0; i<jewels.length; i++){
  //    for(j=0; j<stones.length; j++){
  //      if(stones[j] === stones[i]) count++
  //    }
  //   }
  //   return count;
  };
  
  // var numJewelsInStones = function(jewels, stones) {
  //   const jewels_set = new Set(stones);
  //   console.log(jewels_set)
  //   let count = 0;
  //   jewels.split('').map(char =>{
  //    for(i=0; i<stones.length; i++){
  //      if(stones[i] === char) count++
  //    }
  //   })
  //   return count;
  // };
  
  
  
  console.log(numJewelsInStones("aA", "aAAbbbb"));
   //jewels = "aA", stones = "aAAbbbb"
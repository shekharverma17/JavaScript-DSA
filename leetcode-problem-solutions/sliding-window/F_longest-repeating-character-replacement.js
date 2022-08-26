/**
 * 
 * https://leetcode.com/problems/longest-repeating-character-replacement/submissions/
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
     /*
        l,r: two pointer left l and right r, we will move r
        charCount: an object charCount to store char counts
        maxF: char maximum frequncy count
        res: response
        
     */
    const charCount = {}
    let l = 0, res = 0, maxF = 0
     for(let r = 0; r<s.length;r++){ //loop throuw each char in the string and move pointer r, initialy r will be 0
         charCount[s[r]] = charCount[s[r]] + 1 || 1 // this will increments char count value by 1 if already exists or assign 1
         maxF = Math.max(maxF, charCount[s[r]]) // update maxF, we are updating maxF everytime and we don't have search in the object for maxF 
         
         /*
            r-l+1 is a window size and we have to move left pointer l to reduce window size if the window size is not valid.
             Means if size is 5 and maxF is 3 and K is 1 then 5-3 = 2 and this is greater than k(1) 
             so this means we can replace only 1 char but
             here we have 2 chars so this is invalid window size and we have to reduce it by moving left pointer l;
         */
         while((r-l+1) - maxF > k){
             charCount[s[l]]-- // decreaseing count of char, as we are reducing window size
              l++; // moving left pointer l
         }
         res = Math.max(res, r-l+1) //check and update if current window size is greater than previous 
     }
     
     return res;
 };

 /**
 * 
 * https://leetcode.com/problems/longest-repeating-character-replacement/submissions/
 * 
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
  var characterReplacement = function(s, k) {
    const charCount = {}
    let l = 0, res = 0, maxF = 0
     for(let r = 0; r<s.length;r++){
         charCount[s[r]] = charCount[s[r]] + 1 || 1
         maxF = Math.max(maxF, charCount[s[r]])
         
         while((r-l+1) - maxF > k){
             charCount[s[l]]--
              l++;
         }
         res = Math.max(res, r-l+1)
     }
     
     return res;
 };
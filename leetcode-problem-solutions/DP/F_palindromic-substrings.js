/**
 * @param {string} s
 * @return {number}
 * 
 * 
 * 
 * https://leetcode.com/problems/palindromic-substrings/submissions/
 * 
 */
 var countSubstrings = function(s) {
    let res = 0
    for(i = 0; i<s.length;i++){
       countPali(i, i)
       countPali(i, i+1)
    }
   function countPali(l, r ){
       while(l>-1 && r<s.length && s[l] === s[r]){
            res +=1
            l -= 1
            r += 1
        }
   }
       return res
   };
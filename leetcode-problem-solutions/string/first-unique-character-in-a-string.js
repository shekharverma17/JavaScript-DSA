/* 
https://leetcode.com/problems/first-unique-character-in-a-string/submissions/

 */
var firstUniqChar = function(s) {
    const obj = {}
    for (let letter of s) {
      obj[letter] = obj[letter] ? obj[letter]+1 : 1
    } 
    for(i=0;i<s.length;i++){
      if(obj[s[i]] === 1) return i;
    }
    console.log(obj);
       return -1;
    };
    
    //  for (let letter of s) {
    //       if (s.indexOf(letter) === s.lastIndexOf(letter)) return i;
    //  }
    
    console.log(firstUniqChar('leetcode'));
    

    var firstUniqChar = function(s) {
        for (let i = 0; i < s.length; i++) {
            if ( s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
        }
           return -1;
        };
        
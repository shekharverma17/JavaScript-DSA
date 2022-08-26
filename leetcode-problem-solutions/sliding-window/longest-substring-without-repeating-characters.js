/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let strSet = new Set(), longesSub = 1;
    for(i=0; i<s.length; i++){
        if(strSet.has(s[i])){
            longesSub = Math.max(longesSub, strSet.size)
            strSet.clear()
        }
        strSet.add(s[i])
    }
    longesSub = Math.max(longesSub, strSet.size)
    return longesSub;
};


"dvdf"
"au"
""
"abcabcbb"
"pwwkew"
" "
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let res = ''
    let resLen = 0
    let n = s.length
    for(i=0; i<n; i++){
        let l = r = i;
        while(l>=0 && r<n && s[l] === s[r]){
            if(resLen < r-l+1){
                resLen = r-l+1
                res = s.slice(l, r+1)
            }
                           
            l -= 1
            r += 1
        }
        
        l = i
        r = i+1
        
        while(l > -1 && r<n && s[l] === s[r]){
            if(resLen < r-l+1){
                res = s.slice(l, r+1)
                resLen = r-l+1
            }
            l -= 1
            r += 1
        }
        
    }
    return res
    

};
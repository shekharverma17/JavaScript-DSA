/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    const isMissingArgs = !s.length || !t.length || t.length > s.length
    if (isMissingArgs) return '';
     if(s.length < 2 && t.length < 2){
         if(s === t){
             return t
         }
     }
   let l =0, r=0;
   let window = {}
   let countT = {}
   for(let c of t){
       countT[c] = 1 + countT[c] || 1
   } 
   
    let have = 0, need = Object.values(countT).reduce((a, b) => a + b)
    let res = [], resLen = Infinity
    
    console.log(countT)
    for(r=0; r<s.length; r++){
        let c = s[r]
        window[s[r]] = 1 + window[s[r]] || 1
        console.log(window)
        if(countT[s[r]] && window[c] >= countT[c]){     
            have++;
        }
       
        while(have === need){
          console.log(`have: ${have}`)
             
            if(((r-l)+1) < resLen){
               // console.log(r, l)
                //  console.log(r-l+1)
                resLen = ((r-l)+1);
                console.log(r)
                res = r+l < resLen ? [l,r+1] : [l,r]
            }
            window[s[l]]--
            if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                have--
            }
            l++
        }
    }
    console.log(res)
    let [left, right] = res
     console.log(right)
    return s.slice(left, left + right)
};
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let left = right = 0;
    let sFreqMap = Array(26).fill(0)
    let tFreqMap = Array(26).fill(0)
     let windowStr = ''
     let minStr = ''
    for(let c of t) tFreqMap[c.charCodeAt(0)-97]++;
    for(let c of s) sFreqMap[c.charCodeAt(0)-97]++;
    while(l<s.length ){
       sFreqMap[s[l].charCodeAt(0)-97]--
        let windowSize = r-l+1
        windowStr += s[l]
        if(windowStr.length < minStr){
            windowStr += s[r]
        }else{
            windowStr.SubString(0)
            windowStr += s[r]
        }
        
        if(windowStr.length >= t.length){
            if(isSub()){
                minStr = windowStr;
            }
        }else{
            windowStr
        }
        
        r++
    }
    
    const isSub =()=>{
        for(let i=0; i<t.length;i++){
             if(sFreqMap[t[i].charCodeAt(0)-97] < 1) return false;
            
            return true
        }
        //t.every((v,i)=> v >= 1 && sFreqMap[i] >=1)
    }
    return '';
};

"a"
"b"

"ab"
"a"


"a"
"aa"

"aa"
"aa"

"ab"
"a"

"ADOBECODEBANC"
"ABC"

"a"
"a"

"a"
"aa"

"a"
"b"


"abc"
"b"

"abc"
"ac"


"abc"
"b"
"abc"
"ac"
"bba"
"ab"
var checkInclusion = function(s1, s2) {
    let s1FreqMap = Array(26).fill(0), s2FreqMap = Array(26).fill(0);
    for(char of s1) s1FreqMap[char.charCodeAt(0)-97]++;
    let l=r=0
    while(r<s2.length){
        s2FreqMap[s2[r].charCodeAt(0)-97]++
        let windowSize = (r-l)+1
        if(windowSize === s1.length && s1FreqMap.every((e,i)=> e === s2FreqMap[i])){
            return true;
        }
        if(windowSize >= s1.length){
            s2FreqMap[s2[l].charCodeAt(0) -97]--
            l++
        }
         r++;
    }
    return false
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let s1FreqMap = s2FreqMap = Array(26).fill(0);
    for(char of s1) s1FreqMap[char.charCodeAt(0)-97]++;
    let l=r=0
   // let s2FreqMap = Array(26).fill(0);
    while(r<s2.length){
        s2FreqMap[s2[r].charCodeAt(0)-97]++
        let windowSize = (r-l)+1
        if(windowSize === s1.length && s1FreqMap.every((e,i)=> e === s2FreqMap[i])){
            return true;
        }
        if(windowSize >= s1.length){
            s2FreqMap[s2[l].charCodeAt(0) -97]--
            l++
        }
         r++;
    }
    return false
};

var checkInclusion = (s1, s2) => {
    //console.log(checkInclusion("ab", "eidbaoboo"))
      if (s2.length < s1.length) return false;
      
      let left = right = 0;
   
       const s1FrequencyMap = Array(26).fill(0);
       for (const char of s1) s1FrequencyMap[char.charCodeAt(0) - 97]++;
    
      const s2FrequencyMap = Array(26).fill(0); 
      while (right < s2.length) {
  
         s2FrequencyMap[s2.charCodeAt(right) - 97]++;
          const wind = (right - left) + 1;
         // const isPermutation = (wind === s1.length) && isSame(s1FrequencyMap, s2FrequencyMap);
         const isPermutation = (wind === s1.length) && (s1FrequencyMap.every((e,index) => e === s2FrequencyMap[index])) 
          if (isPermutation) return true;
  
          if (s1.length <= wind) {
              s2FrequencyMap[s2.charCodeAt(left) - 97]--;
              left++;
          }
          
          right++;
      }
      
      return false;
    
  
    
  }
  const isSame = (a, b) => {
    // if(b.every((e,index) => a[index] === b[index])) return false;
      for (let i = 0; i < 26; i++) {
          if (a[i] !== b[i]) return false
      }
      return true;
  }
  
  console.log(checkInclusion("ab", "eidbaoboo"))
  
  var checkInclusion = (s1, s2) => {
    const isInvalid = s2.length < s1.length
    if (isInvalid) return false;
    
    let [ left, right ] = [ 0, 0 ];
    const [ s1FrequencyMap, s2FrequencyMap ] = getFrequencyMaps(s1);
    
    while (right < s2.length) {
        addRightFrequency(s2, right, s2FrequencyMap);

        const wind = (right - left) + 1;
        const isPermutation = (wind === s1.length) && isSame(s1FrequencyMap, s2FrequencyMap);
        if (isPermutation) return true;

        const canSlide = s1.length <= wind;
        if (canSlide) {
            subtractLeftFrequency(s2, left, s2FrequencyMap);
            left++;
        }
        
        right++;
    }
    
    return false;
}

const getFrequencyMaps = (s1) => {
    const [ s1FrequencyMap, s2FrequencyMap ] = new Array(2)
        .fill().map(() => new Array(26).fill(0))

    for (const char of s1) s1FrequencyMap[getCode(char)]++;

    return [ s1FrequencyMap, s2FrequencyMap ]
}


const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

const addRightFrequency = (s, right, frequencyMap) => {
    const char = s[right];
    const index = getCode(char);

    frequencyMap[index]++;
    
    return frequencyMap[index];
}

const subtractLeftFrequency = (s, left, frequencyMap) => {
    const char = s[left];
    const index = getCode(char);

    frequencyMap[index]--;
    
    return frequencyMap[index];
}

const isSame = (a, b) => {
    for (let i = 0; i < 26; i++) {
        const isMatch = a[i] === b[i];
        if (!isMatch) return false
    }
    
    return true;
}

console.log(checkInclusion("ab", "eidbaoboo"))



var checkInclusion = function (s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const count = Array(26).fill(0);
 
    for (let i = 0; i < len1; i++) {
     
        count[s1.charCodeAt(i)-97]++;
        count[s2.charCodeAt(i)-97]--;
    }
   console.log(count)
    //if (!count.some(e => e !== 0)) return true;
    if (count.every(e => e === 0)) return true;

    for (let i = len1; i < len2; i++) {
      console.log(s2.charAt(i))
      // console.log(s2.charCodeAt(i))
        count[s2.charCodeAt(i)-97]--;
      console.log(s2.charAt(i-len1))
        count[s2.charCodeAt(i-len1)-97]++;
       console.log(count)
       if (count.every(e => e === 0)) return true;
    }
    return false;
};
console.log(checkInclusion("ab", "eidbaoboo"))
var checkInclusion2 = function (s1, s2) {
      const s1hash = Array(26).fill(0);
      const s2hash = Array(26).fill(0);
      const s1len = s1.length, s2len = s2.length;
        if(s1len>s2len){
           return false;
        }
           //console.log('222')
        let left=0,right=0;
        while(right<s1len)
        {
            s1hash[s1.charCodeAt([right])-97] +=1;
            s2hash[s2.charCodeAt([right])-97] +=1;
            right +=1;
        }
  console.log(s1hash)
    console.log(s2hash)
        right -=1;  // to point right to the end of the window
        while(right<s2len)
        {
//             if(s1hash==s2hash){
//               return true;
//             }
           if (s1hash.every((e,index) => s1hash[index] === s2hash[index])) return true;
                
            right+=1;
            if(right!=s2len){
              //s2hash[s2[right]-'a'] +=1;
                console.log(s2hash)
              console.log(s2.charCodeAt(right)-97)
            
               s2hash[s2.charCodeAt(right)-97] +=1;
            }
                
           // s2hash[s2[left]-'a'] -=1;
          s2hash[s2.charCodeAt(left)-97] +=1;
            left +=1;
        }
        return false;
    }
//console.log(checkInclusion("ab", "eidbaoboo"))
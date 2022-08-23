/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    let visted = new Set();
    let count = 0;
    const n = isConnected.length

    function dfs(s){
        visted.add(s);
        let adList = []
        for(let i=0; i<n; i++){
            if(isConnected[s][i] === 1) adList.push(i)
        }
        adList.forEach((ad)=>{
            if(!visted.has(ad)) dfs(ad)
        })
    }
    
    for(let i=0; i<n; i++){
        if(!visted.has(i)){
            count++;
            dfs(i)
        }
    }
    return count;
};
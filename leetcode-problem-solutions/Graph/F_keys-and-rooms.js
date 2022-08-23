/**
 * 
 * https://leetcode.com/problems/keys-and-rooms/submissions/
 * 
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const uniKeys = new Set();
    const roomsWithoutKeys = new Set();
    for(i=0;i<rooms.length; i++){
        if(rooms[i].length && i !== 0 && !uniKeys.has(i)){
           roomsWithoutKeys.add(i)
         }
        let keys = rooms[i]
        keys.forEach((key)=>{
           
            if(key !== i){
                uniKeys.add(key)
            }else{
                 roomsWithoutKeys.delete(key)
            }
        })
    }
    return roomsWithoutKeys.size === 0;
    
};

// [[1],[2],[3],[]]
// [[1,3],[1,4],[2,3,4,1],[],[4,3,2]]
// [[1,3],[3,0,1],[2],[0]]


/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const uniKeys = new Set();
    const roomsWithoutKeys = new Set();
    for(i=0;i<rooms.length; i++){
        if(rooms[i].length && i !== 0 && !uniKeys.has(i)){
           roomsWithoutKeys.add(i)
           console.log(i)
         }
        let keys = rooms[i]
        keys.forEach((key)=>{
           
            if(key !== i){
                //console.log(key)
                uniKeys.add(key)
                 console.log(key)
                  roomsWithoutKeys.delete(key)
            }else{
               
            }
        })
    }
    console.log(roomsWithoutKeys)
    return roomsWithoutKeys.size === 0;
};

[[4],[3],[],[2,5,7],[1],[],[8,9],[],[],[6]]
[[1,3],[3,0,1],[2],[0]]
[[1],[2],[3],[]]
[[1,3],[1,4],[2,3,4,1],[],[4,3,2]]
[[1,3],[3,0,1],[2],[0]]


solution:

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const visitedKeys = new Set();
    function dfs(keys){
    keys.forEach((key)=>{         
            if(!visitedKeys.has(key)){
                visitedKeys.add(key)
                dfs(rooms[key])
            }
        })
    }
    dfs(rooms[0])
    for(i=0;i<rooms.length; i++){
        if(i !== 0 && !visitedKeys.has(i)) return false
    }
    return true
};

[[4],[3],[],[2,5,7],[1],[],[8,9],[],[],[6]]
[[1,3],[3,0,1],[2],[0]]
[[1],[2],[3],[]]
[[1,3],[1,4],[2,3,4,1],[],[4,3,2]]
[[1,3],[3,0,1],[2],[0]]


/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const visitedKeys = new Set();
    function dfs(keys){
    keys.forEach((key)=>{         
            if(!visitedKeys.has(key)){
                visitedKeys.add(key)
                dfs(rooms[key])
            }
        })
    }
    visitedKeys.add(0)
    dfs(rooms[0])
  //  console.log(visitedKeys.size)
    return visitedKeys.size === rooms.length
    // for(i=0;i<rooms.length; i++){
    //     if(i !== 0 && !visitedKeys.has(i)) return false
    // }
    // console.log(visitedKeys.size)
    // return true
};
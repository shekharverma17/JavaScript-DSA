/**
 * 
 * 
 * https://leetcode.com/problems/find-center-of-star-graph/submissions/
 * 
 * 
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    const nestEdge = edges[1]
    for( let [i, j] of edges){
        if(i === nestEdge[0] || i === nestEdge[1] ){
           return i
           }
            if(j === nestEdge[0] || j === nestEdge[1]){
           return j
           }
        break;
    }
    return -1
};


/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    // if(edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ){
    //    return edges[0][0]
    //    }
    //     if(edges[0][1] === edges[1][0] || edges[0][1] === edges[1][1]){
    //    return edges[0][1]
    //    }

return edges[0][1] === edges[1][0] ||  edges[0][1] === edges[1][1] ? edges[0][1] : edges[0][0]
};

// const findCenter = (edges) => edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1] ? edges[1][0] : edges[1][1];


/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = (edges)=> edges[0][1] === edges[1][0] ||  edges[0][1] === edges[1][1] ? edges[0][1] : edges[0][0]
/**
 * 
 * 
 * https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/submissions/
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findSmallestSetOfVertices = function(n, edges) {
    let incomingEdge = {}
    let res = []
    for(let edge of edges){
        incomingEdge[edge[1]] = +1
        if(!incomingEdge[edge[0]]){
            incomingEdge[edge[0]] = 0
        }
    }
    for(let key in incomingEdge){
        if(incomingEdge[key] === 0) res.push(key)
    }
    return res;
};



Time: O(E)
Space: O(V)

var findSmallestSetOfVertices = function(n, edges) {
    const degree = Array(n).fill(0);
    const output = [];
    edges.forEach(([u, v]) => degree[v]++);
    degree.forEach((deg, i) => !deg && output.push(i));
    return output;
};


let findSmallestSetOfVertices = (N, E) => {
    let deg = Array(N).fill(0);
    E.forEach(([_, tail]) => ++deg[tail]);
    return deg.map((x, i) => x ? -1 : i).filter(x => -1 < x);
};


https://leetcode.com/user7911d/


Descriptive Javascript theory Solution
0
user7911d's avatar
user7911d
10
June 14, 2022 10:53 PM

28 VIEWS

var findSmallestSetOfVertices = function(n, edges) {
    let set = new Set();
    //find the Indegree Vertices
    for(let [from, to] of edges){
        set.add(to)
    }
    // if any vertices that does not have indegree  then those will be starting point to reach to the other nodes , check it in all of n nodes, from 0 to n , then after filter will push the result into ans array.
    let ans = [];
    for(let i = 0; i < n; i++){
        if(!set.has(i)){
            ans.push(i)
        }
    }
    return ans
};
Time Complexity : O(V+E)


ar findSmallestSetOfVertices = function(n, edges) {
    let map = new Array(n);
    let ans = [];
    
    for (let [index,value] of edges) {
        map[value] = 1;
    };
    
    for (let i = 0; i < n; i++) {
        if (!map[i]) ans.push(i);
    };
    
    return ans;
};

https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/discuss/1078820/O(n)-Javascript-7-lines-(95.12-runtime)

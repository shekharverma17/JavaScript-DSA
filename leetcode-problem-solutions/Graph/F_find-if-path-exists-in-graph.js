/**
 * 
 * 
 * https://leetcode.com/problems/find-if-path-exists-in-graph/submissions/
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    for(let advertex of edges){
       if(advertex[source] && advertex[1] === destination){
            return true;
       }
    }
   return false
};


https://leetcode.com/problems/find-if-path-exists-in-graph/discuss/1418427/Javascript-BFS-iterative-approach-using-queue

Iterative breadth-first search (BFS) approach

Time complexity: O(E)
Space complexity: O(V+E)

Steps:

form an adjacency list
initialize queue with start node
dequeue a node
if node is the end node return true
mark node as visited
add node's unvisited neighbors to queue
if all node's in queue have been processed that means there is no path from start to end, so return false

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
 var validPath = function(n, edges, start, end) {
    const graph = new Map()
    // create our adjacency list
    edges.forEach(([a,b]) => {
        if (!graph.has(a)) {
            graph.set(a, [])
        }
        if (!graph.has(b)) {
            graph.set(b, [])
        }
        graph.get(a).push(b)
        graph.get(b).push(a)
    })
    // prevent revisiting nodes
    const visited = new Array(n)
    const queue = [start]
    while (queue.length > 0) {
        const node = queue.shift() // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
        if (node === end) {
            return true
        }
        visited[node] = true
        graph.get(node).forEach((neighbor) => {
            if (!visited[neighbor]) {
                queue.push(neighbor)
            }
        })
    }
    return false
};
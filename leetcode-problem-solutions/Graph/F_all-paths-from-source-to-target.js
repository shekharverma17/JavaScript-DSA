/* 
Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1
    let res = []
    function dfc(node, path){
        path.push(node) //push(0) = path:[0] // path:[0,4] //path:[0,3]//path:[0,3,4]
        
        if(node === target){ //0 === 4 // 4===4 //4===4
            res.push(path) //[0,4] //[0,3,4]
            retrun;
        }
        for(let nextNode of graph[node]){ //4  //4
            dfs(nextNode, [...path]) //dfs(4,[0]) //returned // dfs(3,[0]) //dfs(4,[0,3])
            //next 3
        }
    }
  dfs(0, [])
     retrun res;
 };
 
 
 console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))
 
 //console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let rowLength = grid.length
    let colLength = grid[0].length
    let count = 0;
    
        function travel(i,j){
            if(i < 0 || i>=rowLength || j < 0 || j >= colLength || grid[i][j] !== "1") return;
        
            grid[i][j] = 0
            travel(i-1,j)
            travel(i+1,j)
            travel(i,j-1)
            travel(i,j+1)  
            
        }
    for(i = 0; i<rowLength; i++){     
        for(j = 0; j<colLength; j++){
             if(grid[i][j] === '1'){ 
                 count++
                 travel(i,j)
             }   
        }
    }
    return count;
};
    
      
/* 
https://leetcode.com/problems/number-of-islands/discuss/519567/What-is-my-time-and-space-complexity
I convinced myself with this explanation:
We do mark each node in the dfs function. But, still, we run through each node in the loop.
Consider the case that all the nodes are lands. Then, loop starts at grid[0][0] and dfs function takes O(mn) to visit and mark all the lands. Then, although the loop never triggers the dfs function again, but it still needs to go through every single node to check if they are still equal to 1 or not.

case that all the nodes are lands:

dfs runs one time: O(mn)
loop goes through all the nodes: O(mn)
So, it is O(mn) + O(mn) which is equal to O(mn).
3
Reply
Share
Report
jsingh75's avatar
jsingh75
69
November 4, 2020 4:23 PM

Read More
We can search one by one, once we find a land, we iterate all of its connected land and mark it as '2'. By marking, we can make sure that we visite each cell only once.

time complexity: O(mn)
space complexity: O(mn) */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let rowLength = grid.length
    let colLength = grid[0].length
    let count = 0;

        
  const isValid =(i,j)=> (i >= 0 &&  i<rowLength &&  j >=0 && j < colLength && grid[i][j] === "1")

        function travel(i,j){
            grid[i][j] = 0
             if(isValid(i-1, j)){
                 travel(i-1,j)
             }
             if(isValid(i+1, j)){
                 travel(i+1,j)
             }
            if(isValid(i, j-1)){
                 travel(i,j-1)
             }
             if(isValid(i, j+1)){
                 travel(i,j+1)
             }
        }
    for(i = 0; i<rowLength; i++){     
        for(j = 0; j<colLength; j++){
             if(grid[i][j] === '1'){ 
                 count++
                 travel(i,j)
             }   
        }
    }
        return count;
};
    
    
    
    
    
    
    
    
    
    
    
    
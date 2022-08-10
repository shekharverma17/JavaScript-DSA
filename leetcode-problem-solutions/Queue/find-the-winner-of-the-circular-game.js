/* 

https://leetcode.com/problems/find-the-winner-of-the-circular-game/submissions/

 */
var findTheWinner = function(n, k) {
    let queue = [];
    for (let i = 0; i < n; i++) queue.push(i + 1);
    let remove = 0;
    while(queue.length > 1){     
    remove = (remove + k -1) % queue.length
     queue.splice(remove, 1);
    }
    return queue[0];
};
var findTheWinner = function(n, k) {
  let queue = Array(5).fill().map((_, i) => i+1);
  console.log(queue)
//     for(i=0,j=1; i<=queue.length; i++){

//         if(k === j){
//             queue.splice(i, 1);
//              j=1;
//         }else{
//             j++;
//         }
      
//         if(i === queue.length){
//           i = 0;
//           j=1;
//         }
//        console.log(queue)
//     }
//     i=o;
//     j=1;
    while(queue.length === 1){     
       console.log(queue)
        if(k === j){
            queue.splice(i, 1);
             j=1;
        }else{
            j++;
        }
      if(queue.length === 1){
        i = 0;
      }
      
      i++;
    }
    return queue[0];
};


console.log(findTheWinner(5, 2))
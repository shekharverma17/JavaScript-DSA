/**
 * @param {number[][]} accounts
 * @return {number}
 */
 const maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(i=0; i<accounts.length; i++){
       cWealth = accounts[i].reduce((acc, val)=> acc+val,0) 
       if(cWealth > maxWealth) maxWealth = cWealth
    }
    return maxWealth;
};


//https://stackoverflow.com/questions/43556132/javascript-performance-reduce-vs-for-loop

const maximumWealth = function(accounts) {
    return accounts.reduce((maxWealth, customer)=>{
        const cWealth = customer.reduce((acc, val)=> acc+val,0)
        if(cWealth > maxWealth) maxWealth = cWealth
        return maxWealth
   },0) 
};
/* 
Runtime: 58 ms, faster than 97.69% of JavaScript online submissions for Richest Customer Wealth.
Memory Usage: 42.2 MB, less than 62.61% of JavaScript online submissions for Richest Customer Wealth.

https://codeburst.io/reduce-vs-for-loop-3c1a84e63872
https://stackoverflow.com/questions/43556132/javascript-performance-reduce-vs-for-loop
*/


/* 

https://leetcode.com/problems/time-needed-to-buy-tickets/


Input: tickets = [2,3,2], k = 2
Output: 6
Explanation:  */

var timeRequiredToBuy = function (tickets, k) {
    let sec = 0, i = 0;
    while (tickets[k] !== 0) {
      if(tickets.length === i ) i = 0;
      if(tickets[i] != 0){
        tickets[i] -= 1;
        sec++
      }
      i++
    }
    return sec;
    
  };

/*   Runtime: 54 ms, faster than 98.04% of JavaScript online submissions for Time Needed to Buy Tickets.
Memory Usage: 42.2 MB, less than 34.64% of JavaScript online submissions for Time Needed to Buy Tickets. */
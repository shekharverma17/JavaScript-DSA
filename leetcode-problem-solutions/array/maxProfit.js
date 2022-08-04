
/**
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * @param {number[]} prices
 * @return {number}
 * 
 */
 var maxProfit = function(prices) {
    let minPrice = maxPrice = prices[0], l = prices.length, maxProfit = 0;
    for(i=0; i<l; i++){
        if(prices[i] < minPrice && i !== l-1) minPrice = maxPrice =  prices[i];
        else if(prices[i] > maxPrice) maxPrice = prices[i];
        maxProfit < maxPrice - minPrice && (maxProfit =  maxPrice - minPrice);
    }
    return maxProfit;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = maxPrice = prices[0];
    let l = prices.length;
    for(i=0; i<l; i++){
        if(prices[i] < minPrice && i !== l-1) minPrice = maxPrice =  prices[i];
        if(prices[i] > maxPrice) maxPrice = prices[i];
    }
    return maxPrice - minPrice;
};

/* Runtime: 132 ms, faster than 43.71% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.8 MB, less than 54.07% of JavaScript online submissions for Best Time to Buy and Sell Stock. */


/* 

https://leetcode.com/mageshyt/

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/1735550/Python-Javascript-Easy-solution-with-very-clear-Explanation
javascript:
 */
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
/* 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/1735493/JavaC%2B%2B-best-ever-EXPLANATION-could-possible
**
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/39267/Javascript-solution-if-anyone-is-interested
* */
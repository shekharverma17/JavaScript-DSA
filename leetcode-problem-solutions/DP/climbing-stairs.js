/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let one = two = 1
    for(let i=1;i<n;i++){
        let temp = one
        one = one+two
        two= temp
    }
    
    return one;
};
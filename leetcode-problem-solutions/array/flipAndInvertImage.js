/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    const resversedArr = []
    for(let i=0; i<image.length; i++){
         resversedArr.push(resverseArr(image[i]));
    }
  return resversedArr;
};

function resverseArr(arr){
    const lastIndex = arr.length -1, reversedArr = [];
    for(i=0; i<=lastIndex; i++){
        if(arr[i] !== arr[lastIndex-i]){
            reversedArr[i] = arr[lastIndex-i] === 0 ? 1 : 0;
            reversedArr[lastIndex-i] = arr[i] === 0 ? 1 : 0;
        }else{
           reversedArr[i] = arr[i] === 0 ? 1 : 0;
        }
    }
    return reversedArr;
}
/* 

const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
console.log(flipAndInvertImage(image));
Runtime: 75 ms, faster than 90.17% of JavaScript online submissions for Flipping an Image.
Memory Usage: 44.5 MB, less than 16.91% of JavaScript online submissions for Flipping an Image.

 */
/* 
var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++) {
        image[i].reverse();
        for(let j = 0; j < image[0].length; j++) {
            image[i][j] === 1 ? image[i][j] = 0 : image[i][j] = 1;
        }
	}
    return image; 
};
 */
/* 

https://leetcode.com/problems/flipping-an-image/discuss/130644/One-Liner-JavaScript-Solution

var flipAndInvertImage = function(A) {
    // take each row, reverse it, then map each number in it and invert it. map returns a list
    return A.map(row => row.reverse().map(num => num^1));

};

time      → O(n^2)

map       → O(n)
  reverse   → O(n)
  map       → O(n)



  My Javascript Solution O(n)
  https://leetcode.com/problems/flipping-an-image/discuss/244476/My-Javascript-Solution-O(n)
  var flipAndInvertImage = function (A) {
    "use strict"
    let row = A.length;
    for (let i = 0; i < row; i++) {
        let left = 0, right = A[i].length - 1;
        while (left <= right) {

            let temp = A[i][left];
            A[i][left] = A[i][right];
            A[i][right] = temp;

            A[i][left] = A[i][left] ? 0 : 1;

            if (right != left) {

                A[i][right] = A[i][right] ? 0 : 1
            }

            left++; right--;
        }
    }
    return A;

};

  /**
 * Optimal one-pass in-place solution
 *
 * If the values are not same, swap and flip will not change anything.
 * If the values are same, we will flip both.
 *
 * Time Complexity: O(N^2)
 *
 * Space Complexity: O(1)
 *
 * N = Matrix Size
 *//* 
class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        if (image == null || image.length == 0 || image[0].length == 0) {
            return image;
        }

        for (int[] row : image) {
            int start = 0;
            int end = row.length - 1;
            while (start <= end) {
                if (row[start] == row[end]) {
                    row[start] ^= 1;
                    row[end] = row[start];
                }
                start++;
                end--;
            }
        }

        return image;
    }
}
https://leetcode.com/problems/flipping-an-image/discuss/130644/One-Liner-JavaScript-Solution


O(n) time and O(1) space Complexity Javascript solution

https://leetcode.com/problems/flipping-an-image/discuss/1528549/O(n)-time-and-O(1)-space-Complexity-Javascript-solution
/**

@param {number[][]} image

@return {number[][]}
*//* 
var flipAndInvertImage = function(image) {
    let colLength = image[0].length;
    let rowLength = image.length;
    
    for(let row=0;row<rowLength;row++){
    let colLeft= 0;
    let colRight = colLength -1;
    while(colLeft<=colRight){
    let temp = image[row][colLeft];
    image[row][colLeft] = image[row][colRight] === 1 ? 0 : 1;
    image[row][colRight] = temp === 1 ? 0 : 1;
    colLeft++;
    colRight--;
    }
    }
    return image;
    }; */ 
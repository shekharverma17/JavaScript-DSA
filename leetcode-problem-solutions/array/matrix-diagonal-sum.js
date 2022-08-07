/**
 * @param {number[][]} mat
 * @return {number}
 */
 const diagonalSum = function(mat) {   
    return mat.reduce((acc, matrix, i)=>{
      const matrixlength = matrix.length-1;
      return acc += (i !== matrixlength-i) ? matrix[i]+ matrix[matrixlength-i] : matrix[i];
    },0)
  };
/* 
Runtime: 67 ms, faster than 92.84% of JavaScript online submissions for Matrix Diagonal Sum.
Memory Usage: 42.9 MB, less than 88.29% of JavaScript online submissions for Matrix Diagonal Sum.

 */
/* var diagonalSum = function(mat) {
    
  return mat.reduce((acc, matrix, i)=>{
         //const matrix = mat[0];
        const matrixlength = matrix.length-1;
     console.log(matrix)
     console.log(`matrix====${matrix}`)
         console.log(`i====${i}`)
      let total = 0;
     total += (i !== matrixlength-i) ? matrix[i]+ matrix[matrixlength-i] : matrix[i];
//        for(i=0; i<=matrixlength; i++){
//           console.log(matrix[i]+ matrix[matrixlength-i])
//             total = matrix[i]+ matrix[matrixlength-i];
//        }
    console.log(`total====${total}`)
      return acc+total;
    },0)
   // console.log(`total====${total}`)
    
};
 */
// var diagonalSum = function(mat) {
    
//   return mat.reduce((acc, matrix)=>{
//          //const matrix = mat[0];
//         const matrixlength = matrix.length-1;
//      console.log(`matrix====${matrix}`)
     
//       let total = 0;
//         for(i=0; i<=matrixlength; i++){
//             console.log(matrix[i]+ matrix[matrixlength-i])
//              total += matrix[i]+ matrix[matrixlength-i];
//         }
//       return total;
//     },0)
//    // console.log(`total====${total}`)
    
// };

const mat = [[1,2,3],
              [4,5,6],
              [7,8,9]];
console.log(diagonalSum(mat));
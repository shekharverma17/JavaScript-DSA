/**
 * 
 * https://leetcode.com/problems/evaluate-boolean-binary-tree/submissions/
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var evaluateTree = function(root) {
    return eval(root);
 };
         
 function eval(root){
     if(root){
         if(root.right && root.left){
             if(root.val === 'AND') return  eval(root.right) && eval(root.left)
           
           if(root.val === 'OR') return  eval(root.right) || eval(root.left)
         }else{
             return root.val;
         }
     }
     return true;
 }
/* 

 https://leetcode.com/problems/evaluate-boolean-binary-tree/discuss/2341383/JavaScript-Simple-Recursive-Solution
 */
 const evaluateTree = function(root) {
    if(root.val == 2){
        return evaluateTree(root.left) || evaluateTree(root.right)
    }else if(root.val == 3){
        return evaluateTree(root.left) && evaluateTree(root.right)
    }
    return root.val
}
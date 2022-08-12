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
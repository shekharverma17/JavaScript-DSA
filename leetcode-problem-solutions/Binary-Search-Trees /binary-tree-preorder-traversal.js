/* 
<!-- 
https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/
--!> */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = []
    helper(root)
    function helper(root){
        if(root){
            result.push(root.val)
            helper(root.left)
            helper(root.right)
        }        
    }
    return result;
};
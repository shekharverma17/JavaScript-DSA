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
 var postorderTraversal = function(root) {
    let arr = []
     helper(root)
     function helper(root){
           if(root){
            helper(root.left)
            helper(root.right)
            arr.push(root.val)
       }
     }
        return arr;
    };
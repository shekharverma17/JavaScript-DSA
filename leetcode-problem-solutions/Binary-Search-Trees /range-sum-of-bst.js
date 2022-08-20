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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

 var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function traverse(root){
        if(!root) return;
        if(root.val >= low && root.val <= high) sum += root.val;
          if(root.val > low){ 
              traverse(root.left)
          }
         if(root.val < high){ 
              traverse(root.right)
          }
    }
    traverse(root)
    return sum;
}; 

 var rangeSumBST = function(root, low, high) {
    let sum = 0;
    function traverse(root){
        if(!root) return;
        if(root.val >= low && root.val <= high) sum += root.val;
         traverse(root.left)
         traverse(root.right)
    }
    traverse(root)
    return sum;
};
/**
 * 
 * https://leetcode.com/problems/diameter-of-binary-tree/submissions/
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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let depth = 1;
    function maxdepth(root){
    if(!root) return depth;
    if(!root.left && !root.right) return depth;
        depth += 1
        maxdepth(root.left)
        maxdepth(root.right)
    }
    let ld = maxdepth(root.left)
    let rd = maxdepth(root.right)
  console.log(ld)
    console.log(rd)
    return ld + rd;
};


//solution

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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let max = 0
   function height(root){
        if(!root) return 0;
        const lh = height(root.left)
        const rh = height(root.right)
        max = Math.max(max, lh+rh)
        return Math.max(lh, rh) + 1
    }
    height(root)
    return max
};


/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let max = 0
    
    const maxDepth = (root) => {
        if (root === null) return 0
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        max = Math.max(max, left + right)
        return Math.max(left, right) + 1
    }
    maxDepth(root)
    return max
};

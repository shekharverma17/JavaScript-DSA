/**
 * 
 * https://leetcode.com/problems/invert-binary-tree/
 * 
 * 
 * 
 * 
 * 
[1]
[4,2,7,1,3,6,9]
[2,1,3]
[]

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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) return root;
    function swap(root){
        if(!root) return root;
        if(!root.left && !root.right) return root;
        let tempRight = root.right;
        root.right = root.left;
        root.left = tempRight;
        swap(root.left)
        swap(root.right)
        return root;
    }
    return swap(root)
};
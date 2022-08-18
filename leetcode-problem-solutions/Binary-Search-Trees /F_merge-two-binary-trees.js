/**
 * 
 * https://leetcode.com/problems/merge-two-binary-trees/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    function merge(t1, t2){
        if(!t1) return t2
        if(!t2) return t1
        t1.val += t2.val
        t1.left = merge(t1.left, t2.left)
        t1.right = merge(t1.right, t2.right)
        return t1
    }
 return merge(root1, root2);
    
};

Explaination:
Merge Two Binary Trees by doing Node Sum (Recursive) | GeeksforGeeks
https://www.youtube.com/watch?v=PbnNL7bbHe8



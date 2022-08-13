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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
    return search(root)
};

function search(root){
    if(root !== null && root.right && root.left ){
        if(root.right.val === root.left.val){
          if(search(root.right) && search(root.left)){
              return true; 
          }else{
              return false;
          }        
        }else{
            return false;
        }
    }else if(root !== null){
        if(root.left && root.left.val !== root.val) return false; 
        if(root.right && root.right.val !== root.val) return false; 
    }
    return true
}
/* 

https://leetcode.com/problems/univalued-binary-tree/discuss/214732/JavaScript-Recursive-2-Liner!


 */
var isUnivalTree = function(root, val = root.val) {
    if(!root) return true;
    
    return root.val === val && isUnivalTree(root.left, val) && isUnivalTree(root.right, val);
};

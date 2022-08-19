
/* 

https://www.youtube.com/watch?v=gkssX4evzkM


[1,2,2,3,null,null,3,4,null,null,4] [] [3,9,20,null,null,15,7]


[1,
    2,      2,
3,null,     null,3,
4,null,       null,4]

 */


/**
 * 
 * 
 * https://leetcode.com/problems/balanced-binary-tree/discuss/2428871/Very-Easy-oror-100-oror-Fully-Explained-(C%2B%2B-Java-Python-JavaScript-Python3)
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
 var isBalanced = function(root) {
    if(!root) return true
   function maxDepth(root){
       if(!root) return 0
       return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
   }
   console.log(root.left)
   let lD = maxDepth(root.left) + 1
   console.log(root.right)
   let rD = maxDepth(root.right) + 1
   console.log(lD)
   console.log(rD)
   return Math.abs(lD-rD) <= 1
};

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
// var isBalanced = function(root) {
//      if(!root) return true
//     function maxDepth(root){
//         if(!root) return 0
//         return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
//     }
//     console.log(root.left)
//     let lD = maxDepth(root.left) + 1
//     console.log(root.right)
//     let rD = maxDepth(root.right) + 1
//     console.log(lD)
//     console.log(rD)
//     return Math.abs(lD-rD) < 1 
// };

var isBalanced = function(root) {
    if (root == null)  return true;
	if (Height(root) == -1)  return false;
	return true;
}
var Height = function(root) {
	if (root == null)  return 0;
	let leftHeight = Height(root.left);
	let rightHight = Height(root.right);
	if (leftHeight == -1 || rightHight == -1)  return -1;
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
    // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
	return Math.max(leftHeight, rightHight) + 1;
};


var isBalanced = function(root) {
    if (!root)  return true;
	if (Height(root) == -1)  return false;
	return true;
}
var Height = function(root) {
	if (!root)  return 0;
	const leftHeight = Height(root.left);
	const rightHight = Height(root.right);
	if (leftHeight == -1 || rightHight == -1)  return -1;
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
	return Math.max(leftHeight, rightHight) + 1;
};
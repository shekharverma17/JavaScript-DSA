/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * 
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * 
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let arrResult = []
     arrResult.push(preorderRec(root));
    return arrResult;
    //return arr;
};

function preorderRec(root){
    let arr = []
    if(root){
        console.log(root)
        console.log(root.children[0])
        arr.push(root.val)
        arr.push(preorderRec(root.children[0])) 
         arr.push(preorderRec(root.children[1])) 
       //return preorderRec(root.children[1])
        return root.val;
    } 
    
    return arr;
}



function preorder(root) {
    let result = [];
    function helper(root) {
      if (!root) return result;
      result.push(root.val);
      root.children?.forEach((el) => helper(el));
      return result;
    }
    return helper(root);
  }
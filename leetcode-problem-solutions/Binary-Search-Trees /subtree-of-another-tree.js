/**
 * 
 * https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */



 var isSubtree = function(root, subRoot) {
    function isIdentical(root, subroot){
        if(root === null  && subroot === null) return true;
        if(root !== null  && subroot === null) return false;
        if(root === null  && subroot !== null) return false;
        
        return (root.val === subroot.val) && (isIdentical(root.left, subroot.left )) && (isIdentical(root.right, subroot.right ))
    }
    
    if (isIdentical(root, subRoot)) return true
    if (root == null) {
        return false
    }
        
    else return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};


 var isSubtree = function(root, subRoot) {
    
    function isMatch(r1, r2){
    if (r1 != null && r2 == null) return false
    if (r1 == null && r2 != null) return false
    if (r1 == null && r2 == null) return true
    
    return (r1.val == r2.val) &&(isMatch(r1.left, r2.left) && isMatch(r1.right, r2.right))
}
    
    function isIdentical(root, subroot){
        if(root === null  && subroot === null) return true;
        if(root !== null  && subroot === null) return false;
        if(root === null  && subroot !== null) return false;
        
        return (root.val === subroot.val) && (isIdentical(root.left, subroot.left )) && (isIdentical(root.right, subroot.right ))

        // if(root.val === subroot.val){
        //     if(isIdentical(root.left, subroot.left)) return true
        //     if(isIdentical(root.right, subroot.right)) return true
        //     //isIdentical(root.right, subroot.right)
        //     return false
        // }else{
        //     if(isIdentical(root.left, subroot)) return true
        //      if(isIdentical(root.right, subroot)) return true
        //      // isIdentical(root.left, subroot)
        //      // isIdentical(root.right, subroot)
        //     return false
        // }
        // return true;
    }
    
      if (isIdentical(root, subRoot)) return true
    if (root == null) {
        return false
    }
        
    else return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    
    //return isMatch(root, subRoot);
    
//     //match root value
//     if(!match) then run left and right match
//     //match left if not then match another left till null
//     if(match) then match 
//     if match left with subroot.left
//     till null
//      right match till null return true
    
    
//     //match right till null
    
    
//     if()// match all right values
//        //match all left value
       
//     if()   
};



[1,2,3]
[1,2,2]
[1]
[1,2,2,3,4,4,3]
[1,2,2,null,3,null,3]


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
 var isSymmetric = function(root) {
    if( (!root.left && !root.right)) return true;
    function childSys(lroot,rroot){
        if(!lroot && !rroot) return;
          if(!lroot || !rroot) return false;
        if(lroot.val === rroot.val && !lroot.left && !rroot.left && !lroot.right && !rroot.right) return true;
        
        if(!lroot.left && !rroot.left) return false;
        if(!lroot.right && !rroot.right) return false;
         if(!lroot.right && rroot.right){
             return false;
         }
        if(lroot.right && !rroot.right){
             return false;
         }
        
        if(lroot.left && !rroot.left){
             return false;
         }
        if(!lroot.left && rroot.left){
             return false;
         }
        
        if(lroot.val !== rroot.val){
             return false;
        }
        if(lroot.left.val !== rroot.right.val){
            return false;
        }
        if(lroot.right.val !== rroot.left.val){
            return false;
        }
        childSys(lroot.left,rroot.left)
        childSys(lroot.right,rroot.right)
        return true;
    }
    return childSys(root.left,root.right)
};

var isSymmetric = function(root) {
    function isSym(L,R) {
        if (L && R && L.val === R.val) {
            return isSym(L.left, R.right) && isSym(L.right, R.left)   
        }
        return L === R
    }
    return isSym(root.left, root.right)
};
/**
 * 
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
 var getTargetCopy = function(original, cloned, target) {
    if (!cloned) return
    console.log(cloned)
    if (cloned.val == target.val) {
        return cloned
    }else{
        return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
    }
};
// var getTargetCopy = function(original, cloned, target) {
//    helper(cloned, target)
//     function helper(root, target){
//     if(root.val === target.val){
//         return root.val
//     }else if(root.left){
//         return helper(root.right, target)
//     } else if(root.right){
//         return helper(root.right, target) 
//     }
//     }
// };


/**
 * 
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/discuss/1677569/JavaScript-Solution
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
 var getTargetCopy = function(original, cloned, target) {
    function tra(o, c) {
        if(!o) return;
        if(o === target) return c;
        return tra(o.left, c.left) || tra(o.right, c.right);
    }
    return tra(original, cloned);
};


olution-1: DFS
var getTargetCopy = function(original, cloned, target) {
    
    function traverse(oNode, cNode) {
        if(!oNode) return;
        if(oNode === target) return cNode;
        return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
    }
    return traverse(original, cloned);
};
Solution-2: BFS
var getTargetCopy = function(original, cloned, target) {
    
    let queue = [[original, cloned]];
    
    while(queue.length) {
        const next = [];
        
        for(let [oNode, cNode] of queue) {
            if(oNode === target) return cNode;
            if(oNode.left) next.push([oNode.left, cNode.left]);
            if(oNode.right) next.push([oNode.right, cNode.right]);
        }
        queue = next;
    }
};
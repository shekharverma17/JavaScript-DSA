
/* 
https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/279511/JavaScript
[1,2,3,4,null,null,5]
[]
[3,9,20,null,null,15,7]
[1,null,2]


[1,2,3,4,null,null,5]

1
2,3
4,null null,5


https://www.youtube.com/watch?v=KnsbIcHchMM

 */
var maxDepth = function(root) {
    if(!root) return 0;
    let d = 1;
    function helper(root){
        if(!root.left && !root.right) return d;
        d += 1
        root.left && helper(root.left)
        root.right && helper(root.right)
    }
    helper(root)
    return d
};

//[1,null,2]
//[-8,-6,7,6,null,null,null,null,5]
8
6  | 7
6, null  | null,null
null , 5
var maxDepth = function(root) {
    if(!root) return 0;
    let ld = 1;
    function leftD(root){
        if(!root.left) return ld;
        ld += 1
        root.left && leftD(root.left)
    }
    let rd = 1;
    function rightD(root){
        if(!root.right) return rd;
        rd += 1
        root.right && rightD(root.right)
    }
    leftD(root)
    rightD(root)
    return ld > rd ? ld : rd
};


Solution
https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1948074/Javascript-line
DFS
Runtime: 64 ms, faster than 99.40% of JavaScript online submissions for Permutations.

var maxDepth = function(root) {
     if(!root) return 0;
    
    return Math.max(maxDepth(root.left) , maxDepth(root.right) ) +1
};

https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/771675/Javascript-Solution%3A104
var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
}

https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/319951/Javascript-one-liner-(89.75)
Javascript one liner using functional programming and recursion

var maxDepth = root => root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let result = resolve(root);
    return result;
};

function resolve(root){
    if(root == null) {
        return 0;
    }
    let left = resolve(root.left) + 1;
    let right = resolve(root.right) + 1;
    return Math.max(left, right);    
}


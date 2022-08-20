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


https://leetcode.com/problems/invert-binary-tree/discuss/399221/Clean-JavaScript-iterative-DFS-BFS-solutions
other:
/ Recursion
function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}

// BFS
function invertTree(root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}
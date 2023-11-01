/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var findMode = function(root) {

    var mode = [], 
        curNodeVal = NaN, 
        curNodeCount = 0, 
        maxCount = -Infinity;
    
     function inorder(root) {
        if (!root) {
            return
        }
        
        inorder(root.left);
        curNodeCount = (root.val === curNodeVal ? curNodeCount : 0) + 1;
        curNodeVal = root.val
        
        if (curNodeCount > maxCount) {
            mode = [root.val];
            maxCount = curNodeCount;
        } 
        else if (curNodeCount === maxCount) {
            mode.push(root.val);
        }
        inorder(root.right);
    }
    inorder(root);
    return mode;
}

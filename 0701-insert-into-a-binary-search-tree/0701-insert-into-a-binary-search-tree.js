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
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function(tree, value) {
    if (tree == null) {
        return new TreeNode(value);
    }
    
    if(value < tree.val) {
        tree.left = insertIntoBST(tree.left, value);
    } else {
        tree.right = insertIntoBST(tree.right, value);
    }
    
    return tree;
};

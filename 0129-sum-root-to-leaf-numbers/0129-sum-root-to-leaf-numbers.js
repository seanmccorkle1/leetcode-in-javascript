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
 * @return {number}
 */


var sumNumbers = function(root, sum = 0) {
    // var sum = 0
    
    if (root == null) {
        return 0
    }
    
    // sum += root.val * 10
    sum *= 10
        sum += root.val

    if (!root.left && !root.right) {
        return sum
    }
    
    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum)    
}

console.log(sumNumbers([1,2,3]), 25,  "root node is 1, left node is 2 and right node is 3")
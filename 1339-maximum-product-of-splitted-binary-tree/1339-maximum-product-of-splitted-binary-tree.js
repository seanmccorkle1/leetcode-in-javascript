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


var maxProduct = function(root) {
    var omax = -1e9;
    var sum = 0;
    function totalSum(node) {
        if (node == null) return;
        sum += node.val;
        totalSum(node.left);
        totalSum(node.right);
    }
    function maxiProduct(node, sum) {
        if (node == null)   return 0;
        var l = maxiProduct(node.left, sum);
        var r = maxiProduct(node.right, sum);
        var sum1 = l + r + node.val;
        omax = Math.max(omax, sum1 * (sum - sum1));
        return sum1;
    }
    totalSum(root);
    maxiProduct(root, sum);
    return omax % (Math.pow(10, 9) + 7);
}


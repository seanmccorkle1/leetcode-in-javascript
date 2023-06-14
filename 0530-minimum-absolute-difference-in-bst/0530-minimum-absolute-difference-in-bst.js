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


const getMinimumDifference = root => recurse( -Infinity, Infinity, root )

const recurse = ( less, more, node ) =>

!node ? Infinity
        : Math.min(
            node.val - less,
            more - node.val,
            recurse( less, node.val, node.left ),
            recurse( node.val, more, node.right ),
        )

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


var widthOfBinaryTree = function(root) {
    
    const minPosArray = [0]
    let maxWidth = 0
    
    const callDFS = (node, level, pos) => {
        
        if (!node) {
            return
        }
        
        if(minPosArray[level] ==undefined) {
            minPosArray.push(pos)
        }

        const diff = pos - minPosArray[level]
        maxWidth = Math.max(maxWidth, diff+1)


        callDFS(node.left, level+1, diff * 2)
        callDFS(node.right, level+1, diff*2 +1)
        return
        return
        return
        // return isnt needed in a function
    }
    
    callDFS(root, 0, 0)
    return maxWidth    
}

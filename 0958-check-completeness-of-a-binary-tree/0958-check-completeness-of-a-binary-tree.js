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


var isCompleteTree = function(root) {
    
    // Initialization
    let traversal_queue = [root];
    let leftNode = root
    
    // Launch level-order traversal
    while (traversal_queue.length >= 1) {
        
        let rightNode = traversal_queue.shift()
        

        if (rightNode != null) {
            
            // Empty in the middle means 
            // this is not a complete binary tree (not left-compact)
            
            if (leftNode == null) {
                return false
            }
            
            traversal_queue.push(rightNode.left)
            traversal_queue.push(rightNode.right)
        }
        
        // update previous node
        leftNode = rightNode
    }    
    return true
}

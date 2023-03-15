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
    let prevNode = root;
    
    // Launch level-order traversal
    while (traversal_queue.length >= 1) {
        
        let curNode = traversal_queue.shift()
        

        if (curNode != null) {
            
            // Empty in the middle means 
            // this is not a complete binary tree (not left-compact)
            
            if (prevNode == null) {
                return false
            }
            
            traversal_queue.push(curNode.left)
            traversal_queue.push(curNode.right)
        }
        
        // update previous node
        prevNode = curNode
    }    
    return true
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */



var buildTree = function(inorder, postorder) {    
    let hash = {};

    for (let index=0; index < inorder.length; index++) {
        hash[inorder[index]] = index
    }
    
    let recur = function(start, end) {

        if (start > end) {return null}
        
        let val = postorder.pop()
        let root = new TreeNode(val)
        
        root.right = recur(hash[val] + 1, end)
        root.left = recur(start, hash[val] - 1)
        
        return root
    }
    
    return recur(0, inorder.length - 1)
}

console.log(buildTree([9,3,15,20,7],  [9,15,7,20,3]), [3,9,20,null,null,15,7])
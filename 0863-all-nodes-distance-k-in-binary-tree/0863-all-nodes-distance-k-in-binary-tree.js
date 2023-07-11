/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */



function findTarget(root, parent, target){
  if(!root) return null
  root.parent = parent

    if(root === target){    
   return root 
  }    
  return findTarget(root.left, root, target) || findTarget(root.right, root, target)    
}

function findAllKApart(root, k, res){
    
    if(!root || root.visited) return res

    if(k == 0){
    res.push(root.val)
    return res
  }   
    
    root.visited = true
  findAllKApart(root.left, k-1, res)
  findAllKApart(root.right, k-1, res)
  findAllKApart(root.parent, k-1, res)
  return res
}

var distanceK = function(root, target, K) {
  if(!root) return []
  const node = findTarget(root, null, target)  
  const res = []
  findAllKApart(node, K, res)
  return res
};

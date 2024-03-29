/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function(node) {
    
    const clone =root => {
        if (!map.has(root.val)) {
            map.set(root.val, new Node(root.val));
            map.get(root.val).neighbors = root.neighbors.map(clone);
        }
        
        return map.get(root.val)
    }
    
    if (node == null) {
        return undefined
    }
    const map = new Map()
    

    return clone(node)
}

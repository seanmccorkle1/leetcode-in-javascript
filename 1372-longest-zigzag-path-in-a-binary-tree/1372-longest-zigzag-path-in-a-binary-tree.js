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


function longestZigZag(root) {
    let longest = 0;    
    const reverse = {left: 'right', right: 'left'};

    const stack = [[root, 'left', 0]]; // can use 'right' as a second element too, won't matter
    while (stack.length) {
        const [node, nextDirection, depth] = stack.pop();

        if (node[nextDirection])
            stack.push([node[nextDirection], reverse[nextDirection], depth + 1]);
        if (node[reverse[nextDirection]])
            stack.push([node[reverse[nextDirection]], nextDirection, 1]);

        longest = Math.max(longest, depth)
    }
    
    return longest
}
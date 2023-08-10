function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var maxDepth = function (root) {

    if (root === null) {
        return 0
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


const tree = {
    data: 3,
    left: {
        data: 9,
        left: null,
        right: null
    },
    right: {
        data: 20,
        left: {
            data: 15,
            left: null,
            right: null
        },
        right: {
            data: 7,
            left: null,
            right: null
        },
    }
}


maxDepth(tree) // 3
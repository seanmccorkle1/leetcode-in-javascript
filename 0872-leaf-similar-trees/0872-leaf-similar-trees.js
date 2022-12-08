var leafSimilar = function(root1, root2) {
    let lAry = [];
    let rAry = [];
    getLeaf(root1,lAry);
    getLeaf(root2, rAry);
    if(lAry.length != rAry.length) return false;
    for(let i=0; i < lAry.length; ++i) {
        if(lAry[i] != rAry[i]) return false;
    }
    return true;
    
};

var getLeaf = function(root, ary) {
    if(!root) return;
    if(!root.left && !root.right) {
        ary.push(root.val);
    }
    getLeaf(root.left, ary);
    getLeaf(root.right, ary);

}

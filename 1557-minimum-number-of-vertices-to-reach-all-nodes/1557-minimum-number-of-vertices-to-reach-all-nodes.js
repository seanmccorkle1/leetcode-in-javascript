var findSmallestSetOfVertices = function(num, edges) {
    const rootNodes = []
    const nodeIndegrees = new Array(num).fill(0)
    
    for (let [fromNode, toNode] of edges) {
        nodeIndegrees[toNode]++
    }
    
    for (let index=0; index< nodeIndegrees.length; index++){
        
        let nodeIndegree = nodeIndegrees[index]
        
        if (nodeIndegree == 0) {
            rootNodes.push(index)
        }
    }
    
    return rootNodes
}

console.log(findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]), [0, 3], "see image")
var findSmallestSetOfVertices = function(num, edges) {
    
    const rootNodes = []
    const indegrees = new Array(num).fill(0)
    
    for (let [fromNode, toNode] of edges){
        indegrees[toNode]++
    }
    
    edges
    indegrees
    
    for (let index=0; index < indegrees.length; index++) {
        
        let currNodesIndegree = indegrees[index]
        const nodeIsARoot = (currNodesIndegree === 0) ? true : false
        
        // then its required to hit every point because its a minimal node
        
        if (nodeIsARoot) {
            rootNodes.push(index)
        }
    }
    
    return rootNodes
}

console.log(findSmallestSetOfVertices(6,  [[0,1],[0,2],[2,5],[3,4],[4,2]]),  [0, 3])
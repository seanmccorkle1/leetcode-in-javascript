/**
 * @param {number[][]} graph
 * @return {number[][]}
 */



var allPathsSourceTarget = function(graph) {
    
    graph
    const endNode = graph.length - 1 // see the problem description
    
    const sourceToEndPaths = []


    const dfs = (node, path) => {
        
        // [0, 1] as `path` means an arrow from node 0 goes to node 1    

        path

        path.push(node)
        path

        node

        // start at graph[0]  ([1, 2])
        // node 0 has edges to node 1 and node 2

        const nodeEdges = graph[node]

        // just push to the return path
        // no need to return a value when using recursion like this
        

        // if we've reached the endNode, we've found a path
        
        node
        endNode

        if (node == endNode) {

            sourceToEndPaths

            sourceToEndPaths.push(path)
            sourceToEndPaths

            // early return before the for loop, this is how you do recursive returns

            return    
        }

        // the 1 => 3 edge comes before the the 0 => 2 edge because its DEPTH-first search
        // go as deep as possible (as close to the end node as possible) before going back

        nodeEdges

        // [...path] gives
        // [ 0 ] 
        // [ 0, 1 ] 
        // [ 0 ] 
        // [ 0, 2] 
        // this is backtracking


        // path with no copy cant go back to the previous state
        // because it directly modifies the array


        // [0]
        // [0, 1]
        // [0, 1, 3]
        // [0, 1, 3, 2]

        // the edge of the previous node becomes the next node
        // dfs(edge, [...path]) and the params are dfs(node, path)

        // theres only 1 path, but "node" and "edge" are separate
        // node 0 has node 1 and node 2 as edges

        node
        nodeEdges

    
        for (let edge of nodeEdges) {

            sourceToEndPaths

            // the function gets returned below the dfs() call on edge = 3
            // that means `edge`   3 and `path` [0, 1] are both deleted
            // and it goes back to the previous state of `edge` 1 and `path` [0]

            // edge is always one ahead of "path"

            // not modifying is needed for this
            // same thing with index + 1 instead of index += 1 or ++

            edge
            path
            
            // path = [0, 2] 
            // edge = 3
            // this is the final loop


            dfs(edge, [...path])

            // this is one step ahead of the `path` quokka before dfs()
 
            path 
        }
    }

    sourceToEndPaths

    dfs(0, [])    
    return sourceToEndPaths
}


console.log(allPathsSourceTarget([[1, 2], [3], [3], []]),  [[0, 1, 3],[0, 2, 3]], 

"each of the elements is an arrow (edge), the index is the node itself",
"node 0 (index 0) has arrows to 1 and 2, so graph[0] is [1, 2]",
"see the picture for why ex. [0, 1, 2, 3] is not a path in the graph")
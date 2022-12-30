/**
 * @param {number[][]} graph2DArray
 * @return {number[][]}
 */


var allPathsSourceTarget = function (graph2DArray) {

    const target = graph2DArray.length - 1
    const pathArray = []


    const DFS = (node, path) => {

        path

        path.push(node)

        const nodeSubarray = graph2DArray[node] 

        // just push to the return array
        // no need to return a value when using recursion like this

        // if we've reached the target, we've found a path

        if (node == target) {
            pathArray.push(path)
            return  
        }

        for (let edge of nodeSubarray) {
            DFS(edge, [...path])
        }
    }

    pathArray

    DFS(0, [])

    pathArray

    return pathArray
}

console.log(allPathsSourceTarget([
    [1, 2],
    [3],
    [3],
    []
]), [
    [0, 1, 3],
    [0, 2, 3]
])
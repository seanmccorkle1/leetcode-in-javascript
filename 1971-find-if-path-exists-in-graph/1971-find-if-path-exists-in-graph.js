/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    const graph = new Map()
    // create our adjacency list
    edges.forEach(([a,b]) => {
        if (!graph.has(a)) {
            graph.set(a, [])
        }
        if (!graph.has(b)) {
            graph.set(b, [])
        }
        graph.get(a).push(b)
        graph.get(b).push(a)
    })
    // prevent revisiting nodes
    const visited = new Array(n)
    const queue = [start]
    while (queue.length > 0) {
        const node = queue.shift() // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
        if (node === end) {
            return true
        }
        visited[node] = true
        graph.get(node).forEach((neighbor) => {
            if (!visited[neighbor]) {
                queue.push(neighbor)
            }
        })
    }
    return false
};
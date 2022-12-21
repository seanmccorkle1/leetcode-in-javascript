/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

var possibleBipartition = function(N, dislikes) {
    const graph = [...Array(N+1)].map(() => []);
    const visited = Array(N+1).fill(false);
    const color = Array(N+1).fill(0);

    for(let [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u);
    }

    for(let i = 1; i <= N; i++) {
        if(!colorNodes(i)) return false;
    }
    return true;

    function colorNodes(node) {
        if(visited[node]) return true;
        const currColor = new Set([1, 2]);

		// remove colors used by neighbors
        for(let child of graph[node]) {
            if(color[child] === 1) currColor.delete(1);
            if(color[child] === 2) currColor.delete(2);
        }

		// no color is available return false
        if(currColor.size === 0) return false;
		
		// assign the smallest available color
        color[node] = Math.min(...currColor);
        visited[node] = true;  

        for(let child of graph[node]) {
            if(!colorNodes(child)) return false; 
        }
        return true;
    }
};
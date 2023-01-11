/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */


var minTime = function(n, edges, hasApple) {
    const m = {};
	edges.sort((a,b) => a[0] - b[0]);
    for(let edge of edges) 
        if (m[edge[1]] !== undefined)
            m[edge[0]] = edge[1];
        else
            m[edge[1]] = edge[0];

    let result = 0;
    for(let i = 0; i < hasApple.length; ++i) {
        if (!hasApple[i]) continue;
        let p = i;
        while(p != 0 && m[p] >= 0) {
            const temp = m[p];
            m[p] = -1; // mark as visited
            p = temp;
            result += 2;
        }
    }
    return result;
};
var distanceLimitedPathsExist = function(n, e, q) {
    let par = new Array(n).fill().map((_,i) => i),
        ord = new Array(q.length).fill().map((_,i) => i), 
        ans = new Array(q.length), j = 0
    const find = (x) => x !== par[x] ? par[x] = find(par[x]) : par[x]
    const union = (x,y) => par[find(x)] = find(y)
    e.sort((a,b) => a[2] - b[2])
    ord.sort((a,b) => q[a][2] - q[b][2])
    for (let i of ord) {
        let [a,b,c] = q[i]
        while (e[j]?.[2] < c) union(e[j][0], e[j++][1])
        ans[i] = find(a) === find(b)
    }
    return ans
};

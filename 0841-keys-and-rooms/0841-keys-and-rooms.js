/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(R) {
    let vis = new Uint8Array(R.length), stack = [0], count = 1
    vis[0] = 1
    while (stack.length) {
        let keys = R[stack.pop()]
        for (let k of keys)
            if (!vis[k]) stack.push(k), vis[k] = 1, count++
    }
    return R.length === count
};
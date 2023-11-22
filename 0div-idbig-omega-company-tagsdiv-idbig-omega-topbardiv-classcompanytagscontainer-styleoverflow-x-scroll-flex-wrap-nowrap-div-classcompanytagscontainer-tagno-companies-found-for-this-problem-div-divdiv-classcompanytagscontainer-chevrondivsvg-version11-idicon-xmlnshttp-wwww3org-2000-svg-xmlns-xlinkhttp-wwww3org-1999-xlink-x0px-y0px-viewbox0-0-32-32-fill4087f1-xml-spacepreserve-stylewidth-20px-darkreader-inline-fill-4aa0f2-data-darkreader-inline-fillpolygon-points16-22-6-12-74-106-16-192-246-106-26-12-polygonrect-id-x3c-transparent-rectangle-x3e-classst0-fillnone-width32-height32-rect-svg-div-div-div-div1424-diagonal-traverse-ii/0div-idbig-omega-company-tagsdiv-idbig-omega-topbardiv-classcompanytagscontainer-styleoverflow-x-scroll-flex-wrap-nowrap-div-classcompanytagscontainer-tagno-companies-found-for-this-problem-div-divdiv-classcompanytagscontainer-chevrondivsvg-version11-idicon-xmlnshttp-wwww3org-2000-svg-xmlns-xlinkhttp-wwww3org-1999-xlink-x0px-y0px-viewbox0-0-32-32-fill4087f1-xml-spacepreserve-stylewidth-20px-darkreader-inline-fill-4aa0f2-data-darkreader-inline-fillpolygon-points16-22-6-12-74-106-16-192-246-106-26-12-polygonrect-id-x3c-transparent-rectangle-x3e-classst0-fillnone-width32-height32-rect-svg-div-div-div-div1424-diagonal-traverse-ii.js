var findDiagonalOrder = function(A, ans = []) {
    // set queue
    let q = [[0, 0]]
    
    // loop
    while (q.length !== 0) {
        // get current value
        let a = q.pop()
        
        // y
        if(a[1] === 0 && a[0] + 1 < A.length) {
            q.unshift([a[0] + 1, a[1]])
        }
        
        // x
        if(a[1] + 1 < A[a[0]].length) {
            q.unshift([a[0], a[1] + 1])
        }
        
        // insert
        ans.push(A[a[0]][a[1]])
    }

    // result
    return ans
}

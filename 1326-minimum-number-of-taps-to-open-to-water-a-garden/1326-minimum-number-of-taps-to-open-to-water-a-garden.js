var minTaps = function(n, ranges) {
    
    // null will mess up Math.min() and Math.max
    const dp = new Array(n + 1).fill(1e6);
    dp[0] = 0
    
    for (let i = 0; i < ranges.length; i++) {
        
        let leftCover = Math.max(0, i - ranges[i])        
        let rightCover = Math.min(n, i + ranges[i])
        
        let start = leftCover
        
        while (start <= rightCover){
            dp[start] = Math.min(dp[leftCover] + 1, dp[start])
            start++
        }
        
        // for (let k = leftCover; k <= rightCover; k++) {
            // dp[k] = Math.min(dp[k], 1 + dp[leftCover]);
        // }
    }
    
    // whole garden cant be watered
    if (dp.at(-1) == 1e6) {
        return -1
    }
    

    return dp[n]
}


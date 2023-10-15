var numWays = function(steps, arrLen) {
    
    let maxIndex = Math.min(steps, arrLen), mod = 10 ** 9 + 7;
    
    let dp = Array(maxIndex).fill(0);
    dp[0] = 1, dp[1] = 1;
  


    for (let i = 2; i <= steps; i++) {
        
        let dp2 = Array(maxIndex).fill(0);
        
        for (let j = 0; j < maxIndex; j++) {
            let left = j === 0 ? 0 : dp[j - 1];
            let right = j === maxIndex - 1 ? 0 : dp[j + 1];
            dp2[j] = (left + right + dp[j]) % mod;
        }
        dp = dp2;
    }
    return dp[0];
}


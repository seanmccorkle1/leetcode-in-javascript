var validPartition = a => {
    let n = a.length
    const dp = Array(n + 1).fill(false); // dp[i]: till i, if the array can be partition
    dp[0] = true
    
    for (let i = 2; i <= n; i++) {
	    // check dp[i-2] = true dp[i-3] = true for previous array can be partion
    
        if (dp[i - 2] && a[i - 2] == a[i - 1]) dp[i] = true; // condition 1
        
        if (i - 3 >= 0 && dp[i - 3] && a[i - 1] == a[i - 2] && a[i - 2] == a[i - 3]) dp[i] = true; // condition 2
        
        if (i - 3 >= 0 && dp[i - 3] && a[i - 1] - a[i - 2] == 1 && a[i - 2] - a[i - 3] == 1) dp[i] = true; // condition 3
    }
    return dp[n];
};
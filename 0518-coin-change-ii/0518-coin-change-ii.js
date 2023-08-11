var change = function(amount, coins) {
    
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    
    for (let i=0; i<coins.length;i++) { // iterate the types of coin
        
        for (let j=1; j<=amount; j++) {
            
            i
            j
            
            // dp[j] is the combinations for amount j for not using the current coin
            // dp[j - coins[i]] is is the combinations for using the current coin
            
            if (j >= coins[i]) {
                let value = dp[j - coins[i]]
                dp[j] += value
            }
        }
    }
    
    return dp[amount]
}

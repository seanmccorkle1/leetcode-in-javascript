var maxProfit = function (array) {
    
    let maxStockProfit = 0
    
    // accounts for buying first by being behind and being negative
    let buyNum = array[0]


    // if buyNum is greater than the result is negative
    
    for (const sellNum of array) {
        
        maxStockProfit
        
        // buy it for low (lose $2), sell it high (gain $10)
        
        if (buyNum <sellNum) {
            let profit  = sellNum - buyNum
            maxStockProfit = Math.max(profit, maxStockProfit)
        } 
        
        else {
            buyNum = sellNum  // buy comes first like this
        }
    }
    
    return maxStockProfit
}


console.log(maxProfit([7, 3, 1, 5, 3, 6, 0, 4]), 5, "6 - 1 for 5")
var maxProfit = function(P, F) {
    
    let len = P.length
    let buying = 0
    let selling = -P[0]
    
    for (let i = 1; i < len; i++) {        
        
        const currPrice = P[i]
        
        // price + negative
        buying = Math.max((currPrice + selling) - F, buying)
        selling = Math.max(buying - currPrice, selling)
    }
    
    return buying
}


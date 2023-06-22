var maxProfit = function(priceArray, fee) {

    let maxProfit = 0
    let selling = -priceArray[0]

    for (let index = 1; index < priceArray.length; index++) {

        const currPrice = priceArray[index]
        
        let buyPrice = currPrice + selling
        buyPrice -= fee
        
        maxProfit = Math.max(buyPrice, maxProfit)
        selling = Math.max(maxProfit - currPrice, selling)
    }

    return maxProfit
}

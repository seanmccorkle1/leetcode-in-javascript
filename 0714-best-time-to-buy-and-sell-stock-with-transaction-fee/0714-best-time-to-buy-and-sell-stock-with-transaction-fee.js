var maxProfit = function(priceArray, fee) {

    let maxProfit = 0
    let selling = -priceArray[0]

    if (selling >= 1){
        return 
    }
    for (let index = 1; index < priceArray.length; index++) {

        const currPrice = priceArray[index]
        
        let buyPrice = currPrice + selling
        buyPrice -= fee

        selling = Math.max(maxProfit - currPrice, selling)
        maxProfit = Math.max(buyPrice, maxProfit)

    }

    return maxProfit
}

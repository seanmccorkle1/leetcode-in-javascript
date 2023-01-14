// the whole program can see priceArray now
// by putting `let` here

var priceArray=[]

class StockSpanner {

    // "let priceArray = []" would mean
    // `priceArray` is only visible in the tiny constructor block

    // have to assign values inside the constructor

    constructor() {
        priceArray = []
    }

    next(currentPrice) {

        priceArray.push(currentPrice)

        priceArray

        let consecutiveDayCount = 0
        let backIndex = priceArray.length - 1

        // the prices are the same on the first loop
        // [before, time1, time2, time3, present]
        // each next() call is a newer stock (more to the right)


        priceArray

        while (backIndex >= 0) {

            const previousPrice = priceArray[backIndex]

            previousPrice
            currentPrice
            
            if (previousPrice <= currentPrice) {
                consecutiveDayCount += 1
            } 
            else if (previousPrice > currentPrice) {
                // break
                return consecutiveDayCount

            }

            backIndex -= 1
        }

        return consecutiveDayCount
    }
}
const stockSpanObject = new StockSpanner()

// [100,80,60,70,60,75,85]

// console.log(stockSpanObject.next(100), 1, "no days to the left are less in [100,80,60,70,60,75,85]")
// console.log(stockSpanObject.next(80), 1)

// console.log(stockSpanObject.next(60), 1)
// console.log(stockSpanObject.next(70), 2)

// console.log(stockSpanObject.next(60), 1)
// console.log(stockSpanObject.next(75), 4)
// console.log(stockSpanObject.next(85), 6)
var mincostTickets = function (daysArray, costArray) {

    // index of ticket
    const travelDaysSet = new Set(daysArray)
    
    daysArray
    costArray

    const lastTravelDay = daysArray.at(-1)

    // DP table, record for minimum cost of ticket to travel
    const dpCostArray = new Array(lastTravelDay + 1).fill(0)

    // solve min cost by DP
    // 1 to 31, including 31

    travelDaysSet
    costArray

    // there is no day 0
    // you have to pass the last day itself

    for (let index = 1; index <= lastTravelDay; index++) {

        // if today IS the traveling day
        // compute the optimal min cost

        index
        travelDaysSet

        if (travelDaysSet.has(index)) {

            // same as the set
            index
            travelDaysSet

            // keep the running sum like this
            //make the ranges touch each other (be continuous) or its not valid

            let oneDayCost = dpCostArray[index - 1] + costArray[0]

            // array[-6] is not valid
            let sevenDayCost = dpCostArray[Math.max(index - 7, 0)] + costArray[1]
            let thirtyDayCost = dpCostArray[Math.max(index - 30, 0)] + costArray[2]

            const minCost = Math.min(oneDayCost, sevenDayCost, thirtyDayCost)
            dpCostArray[index] =minCost

            // 9 is the min needed to reach the relevant travel days
            // just spam it until the next relevant day comes up

            dpCostArray
        }
        
        // if today is NOT a traveling day, just keep the sum running

        else if (!travelDaysSet.has(index)) {
            dpCostArray[index] = dpCostArray[index - 1]
        }

        dpCostArray
    }

    dpCostArray
    
    return dpCostArray.at(-1)
}

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]), 11, "buy $2 one-day on day 1, $7 7-day on day 2 and $2 one-day on day 20, total is 7+2+2 = 11")

// console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]), 17, "buy the 30-day pass for $15 which covers [1-30] and buy the $2 one-day pass for day 31, total is $15 + $2")
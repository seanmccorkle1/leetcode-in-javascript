var mincostTickets = function (daysArray, costArray) {


    // only use ... with [] syntax 
    // [...string]


    const travelDaysSet = new Set(daysArray)


    daysArray
    costArray


    const lastTravelDay = daysArray.at(-1)


    // compensate for starting at index 1
    // add one to the end to keep the same range


    const dpCostArray = new Array(lastTravelDay + 1).fill(0)


    // solve min cost by DP
    // 1 to 31, including 31


    travelDaysSet
    costArray


    // <= cause you have to pass the last day itself
    // start at index 1 for [index - 1]


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
            
            let sevenIndex = index - 7
            if (sevenIndex <= -1){
                sevenIndex = 0
            }
            
            let sevenDayCost = dpCostArray[sevenIndex] + costArray[1]
            
            // let sevenDayCost = dpCostArray[Math.max(index - 7, 0)] + costArray[1]
            
            let thirtyIndex = index - 30

            if (thirtyIndex<= -1) {
                thirtyIndex = 0
            } 
            
            let thirtyDayCost = dpCostArray[thirtyIndex] + costArray[2]
            

            const minCost = Math.min(oneDayCost, sevenDayCost, thirtyDayCost)
            dpCostArray[index] =minCost


            // 9 is the min needed to reach the relevant travel days
            // just spam it until the next relevant day comes up


            dpCostArray
        }
        
        // if today is NOT a traveling day, just keep the sum running


        else if (!travelDaysSet.has(index)) {
            const leftCost = dpCostArray[index - 1]
            dpCostArray[index] =leftCost
        }
        
        dpCostArray
    }
    
    dpCostArray
    
    return dpCostArray.at(-1)
}


console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]), 11, "buy $2 one-day on day 1, $7 7-day on day 2 and $2 one-day on day 20, total is 7+2+2 = 11")
var minCostClimbingStairs = function (array) {
    
    array
    
    // start at the 3rd, 
    // get 1st, 2nd, 3rd on the first loop
    for (index = 2; index < array.length; index++) {

        const currCost = array[index]
        
        let oneStepBeforeCost = array[index - 1]
        let twoStepsBeforeCost = array[index - 2]
        
        // 1 or 2 steps, whichever one has a lower cost
        const minCostOfLastTwo = Math.min(oneStepBeforeCost, twoStepsBeforeCost)
        
        // prefix sum thing

        // [10, 15, 20, 2000] becomes
        // [10, 15, 30, 2000]
        // to account for the 20 cost and the 10 cost

        currCost
        minCostOfLastTwo
        
        // "currCost += minCostOfLastTwo"
        array[index]+=minCostOfLastTwo

        array
    }

    // take 1 step from the last, or 2 steps for the second-to-last
    array
    return Math.min(array.at(-1), array.at(-2))
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6, "dont get any 100s")

// console.log(minCostClimbingStairs([10, 15, 20, 1000]), 30, "pay 10, pay 20, then you get to the end. the end is really outside the array like `[10, 15, (20 + 10), 2000]`")
// console.log(minCostClimbingStairs([10, 1], 1), 1)
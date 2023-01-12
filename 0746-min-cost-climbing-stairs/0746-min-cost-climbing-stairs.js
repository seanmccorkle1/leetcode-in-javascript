var minCostClimbingStairs = function (array) {
    
    // if (array.length <= 2) {
    //     return Math.min(...array)
    // }

   
    array

   
    // 3 or more, go into this loop    
    for (index = 2; index < array.length; index++) {
    
        const currCost = array[index]
        
        array
        let oneBefore = array[index-1]
        let twoBefore = array[index-2]



        // 1 or 2 steps, whichever one has a lower cost
        let minOfTwo=Math.min(oneBefore, twoBefore)



        // prefix sum thing



        // [10, 15, 20, 2000] becomes
        // [10, 15, 30, 2000]
        // to account for the 20 cost and the 10 cost



        currCost
        minOfTwo



        array[index] = minOfTwo + currCost
        array
    }



    array


    let last = array.at(-1)
    let secondToLast = array.at(-2)


    //[10, 15, 20], top



    let minCostToTop =
        Math.min(
            last,
            secondToLast)


    return minCostToTop
}


console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6, "dont get any 100s")


// console.log(minCostClimbingStairs([10, 15, 20, 1000]), 30, "pay 10, pay 20, then you get to the end. the end is really outside the array like `[10, 15, (20 + 10), 2000]`")
// console.log(minCostClimbingStairs([10, 1], 1), 1)
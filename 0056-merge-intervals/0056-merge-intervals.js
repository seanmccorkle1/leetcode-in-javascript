/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervalsDoubleArray) { 

    // start from the lowest startInterval
    
    // startInterval is guaranteed to be lower than endInterval in the same subarray
    // but one startInterval isnt guaranteed to be lower than another startInterval
    
    intervalsDoubleArray.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])    

    let leftInterval = intervalsDoubleArray.shift()

    let mergedIntervalsDoubleArray = []
    
    for (let rightInterval of intervalsDoubleArray){

        const canMerge = rightInterval[0] <= leftInterval[1]

        
        if (canMerge){

            let leftPoint = leftInterval[0]
            let maxRightPoint = Math.max(leftInterval[1], rightInterval[1])
            
            // if 4 intervals (4 subarrays) can all merge into one (leftInterval), do so
            
            leftInterval =  [leftPoint, maxRightPoint]
        }
            
        
        else if (!canMerge) {
            
            mergedIntervalsDoubleArray.push(leftInterval)
            
            // leftInterval =   [15, 18]
            leftInterval = rightInterval         
        }        
        
    }

    let finalInterval=leftInterval
    mergedIntervalsDoubleArray.push(finalInterval)
    return mergedIntervalsDoubleArray
}

console.log(merge([[2,6], [1,3], [8,10],[15,18]]), [[1,6],[8,10],[15,18]],  
"start from the lowest START interval, 1 in [1, 3] instead of 2 in [2, 6]")

// console.log(merge([[5,8], [8,200]]),  [[5, 200]], "merge if theyre equal")
// console.log(merge([[5, 100], [50, 65]]),  [ [5, 100] ], "merge, but 100 beats the 65")
// console.log(merge([ [5, 8], [65, 200]]),   [[5,8], [65, 200]], "dont merge")
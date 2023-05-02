var numberOfArithmeticSlices = function (array) {
    
    let consecutiveSliceCount = 0
    let totalSlices = 0
    
    
    for (let index = 2; index < array.length; index++) {
        
        consecutiveSliceCount
        array
        
        // in [0,1,2], this compares [0, 1]
        const difference1 = array[index] - array[index - 1]
        
        // compares [1, 2]
        const difference2 = array[index - 1] - array[index - 2] 
        
        // those 2 makes [0, 1, 2]
        // the count gets +2 at once if theyre consecutive


        // [0, 1, 2] - 1 slice
        // [0,1,2,3] - 2 new slices  - [1,2,3] and [0,1,2,3]

        //[+1, +2, +3, +4] for consecutiveSliceCount

        difference1
        difference2
        
        const arithmeticSliceFound = difference1 == difference2
        
        if (arithmeticSliceFound) {
            
            consecutiveSliceCount
            totalSlices
            
            consecutiveSliceCount += 1
            totalSlices += consecutiveSliceCount
        }
        
        else if (!arithmeticSliceFound) {
            consecutiveSliceCount = 0
        }
        
        totalSlices
    }
    
    return totalSlices
}

console.log(numberOfArithmeticSlices([3, 7, 11, 15, 0, 0, 3, 7, 11]), 4, "the first half is 3 slices, the second is 1 slice")

//console.log(numberOfArithmeticSlices([0, 1, 2]), 1)

// console.log(numberOfArithmeticSlices([0, 1, 2, 3]), 3, "3 slices, [0,1,2], [1,2,3], [0,1,2,3]")
// console.log(numberOfArithmeticSlices([0, 1, 2, 3, 4]), 6, "3 more, [2,3,4], [1,2,3,4], [0,1,2,3,4]")

// console.log(numberOfArithmeticSlices([0, 1, 4, 6, 7, 10]), 0, "[1, 4, 7] and [4,7,10] are both non-contiguous, they arent slices")
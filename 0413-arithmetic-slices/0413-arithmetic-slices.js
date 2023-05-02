var numberOfArithmeticSlices = function (array) {
    
    let totalSlices = 0
    let consecutiveSlices = 0

    for (let index = 2; index < array.length; index++) {
        
        array
        
        const difference1 = array[index] - array[index - 1]
        
        const difference2 = array[index - 1] - array[index - 2] 
        
        // [0, 1, 2] - 1 slice        
        // [0, 1, 2, 3] - the 3 adds two slices  
        // [0,1,2] and [0,1,2,3]
        
        difference1
        difference2
        
        const arithmeticSliceFound = Boolean(difference1 == difference2)
        
        if (arithmeticSliceFound) {
            
            consecutiveSlices
            totalSlices
            
            consecutiveSlices += 1
            totalSlices += consecutiveSlices
        }

        else if (!arithmeticSliceFound) {
            consecutiveSlices = 0
        }
        
        totalSlices
    }
    
    return totalSlices
}

console.log(numberOfArithmeticSlices([3, 7, 11, 15, 0, 0, 3, 7, 11]), 4, "the first half is 3 slices, the second is 1 slice")

// console.log(numberOfArithmeticSlices([0, 1, 2]), 1)

// console.log(numberOfArithmeticSlices([0, 1, 2, 3]), 3, "3 slices, [0,1,2], [1,2,3], [0,1,2,3]")
// console.log(numberOfArithmeticSlices([0, 1, 2, 3, 4]), 6, "3 more, [2,3,4], [1,2,3,4], [0,1,2,3,4]")

// console.log(numberOfArithmeticSlices([0, 1, 4, 6, 7, 10]), 0, "[1, 4, 7] and [4,7,10] are both non-contiguous, they arent slices")
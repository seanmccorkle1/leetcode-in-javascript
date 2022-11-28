/**
 *
 *
 */

 var numberOfArithmeticSlices = function (array) {

     const cacheMap = new Map()
     let contiguousSubarrayCount = 0

     cacheMap

     array

     for (let rightIndex = 0; rightIndex < array.length; rightIndex += 1) {

        rightIndex

        // map of maps
        cacheMap[rightIndex] = new Map()


        // `array` = [2, 4, 6, 8, 10]

        // 0 < 1 - loop 1
        // [2, 4] - difference = 2
        // right is 4

        // now rightIndex is 2, leftIndex gets reset to 0

        // 0 < 2 - loop 2
        // [2, 6] - difference = 4

        // 1 < 2 - loop 3
        // [4, 6], difference = 2

        // now left is 4 and the difference is 2 for both
        // update count here

        // 0 < 3 - loop 4
        // [2, 8], difference = 6

        // 1 < 3 - loop 5
        // [4, 8], difference = 4
        
        // 2 < 3 - loop 6
        // [6, 8] - difference = 2

        // two arithmetic subarrays get added to count on loop 6
        //[4, 6, 8] and [2, 4, 6, 8]


        // 0 < 4 - loop 7
        // [2, 10] difference = 8

        // 1 < 4 -loop 8 
        // [4, 10] - difference = 6

        // index2 < index4  - loop 9
        // [6, 10], difference = 4

        // [2, 6], 6 is on rightIndex
        // [6, 10] - now 6 is on leftIndex

        // so the subarray is continuous and it has the same difference increment count by 1 
        // this slice is [2, 6, 10]

        // 3 < 4 - loop 10
        //[8, 10] difference = 2

        // [6, 8] all have 8 on the right and difference=2
        // [8, 10] , now 8 is on the left
        
        
        // leftIndex is the inner one
        for (let leftIndex = 0; leftIndex < rightIndex; leftIndex += 1) {

            leftIndex
            rightIndex

            let difference = array[rightIndex] - array[leftIndex]

            // cacheMap[1].get(2) on the THIRD loop
            // a subarray needs at least 3 elements

            rightIndex

            let rightIndexCache =
            cacheMap[rightIndex].get(
                difference) || 0

            // once leftIndex makes it to where rightIndex was
            // AND the difference is the same, update count
            
            // cacheMap[2].get(2)  on loop 6

            leftIndex

            const numPrevSlicesWithSameDifference =
            cacheMap[leftIndex].get(
                difference) || 0

            numPrevSlicesWithSameDifference

            contiguousSubarrayCount += numPrevSlicesWithSameDifference

            // `array` =  [2, 4, 6, 8, 10]

            // start it at 1 with (0 + 0 + 1)
            rightIndex

            cacheMap[rightIndex].set(difference, 
                (rightIndexCache + numPrevSlicesWithSameDifference + 1))

            
            //  (1: Map { 2 => 1 }) means INDEX 1 (4) 
            // has a difference of 2 ([2, 4]) 
            // 1 time (no previous slices)

            // 2 => 1 into 2 => 2 into 2 => 3
            // the more to the right, the more possible combinations

             cacheMap
         }
     }

     cacheMap
     return contiguousSubarrayCount
 }

 console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10]), 7, 

 [[2,4,6], 
 [4,6,8], [2,4,6,8], 
 [2,6,10], 
 [6,8,10], [4,6,8,10], [2,4,6,8,10]])
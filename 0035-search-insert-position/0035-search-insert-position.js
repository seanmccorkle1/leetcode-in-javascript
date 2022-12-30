var searchInsert = function (array, numToInsert) {


    // If the numToInsert is less then the very last item then insert it at that item index
    // Otherwise insert it at that item index + 1    

    if (array.includes(numToInsert)){
        return array.indexOf(numToInsert)
    }

    const recursiveBinarySearch = function(array, numToInsert, startIndex, endIndex) {

        startIndex
        endIndex

        // endIndex cant get higher than array.length - 1
        // [5, 6, 10], array length is 3, so endIndex = 2


        if (startIndex > endIndex) {
            return startIndex
        }

        const midIndex = Math.trunc((startIndex + endIndex) / 2)

        let num = array[midIndex]

        // found the number successfully

        if (num == numToInsert) {
            return midIndex
        }

        //  numToInsert is lower, search the left side

        // call binarySearch() function inside binarySearch()

        if (numToInsert < num) {
            return recursiveBinarySearch(array, numToInsert,
                startIndex, midIndex - 1)
        }

        // this is normal recursion, not backtracking
        // because theres no base case

        // in recursion, the syntax is 
        // return fnName(arg1, arg2)

        // instead of fnName(arg1, arg2) with no return value 

        // the target number is higher, search the right half
        // (startindex, endIndex) becomes (midIndex + 1, endIndex)
        // the starting point becomes the right half, the end point stays the same    

        if (numToInsert > num) {
            return recursiveBinarySearch(array, numToInsert,
                midIndex + 1, endIndex)
        }
    }  // end of binarySearch() function

    
    const backIndex = array.length - 1

    let indexToInsertAt = recursiveBinarySearch(array, numToInsert, 0, backIndex)
    return indexToInsertAt

    // return binarySearch(array, numToInsert, 0, backIndex)
}


// var searchInsert = function(array, numToInsert) {
//     const backIndex = array.length - 1
//     return binarySearch(array, numToInsert, 0, backIndex)
// }


console.log(searchInsert([5, 6, 10], 12), 3, "12 should be at index 3, [5, 6, 10, 12]")
// console.log(searchInsert([5,6,10], 4),  0, "[4,5,6,10], 4 should be at index 0")

// console.log(searchInsert([5,6,10], 6),   1, "6 already exists, its at index 1")

// console.log(searchInsert([5,6,10], 7),   2,  "7, 8, 9 should all go to position 3, index 2")
// console.log(searchInsert([5,6,10], 8),   2)
// console.log(searchInsert([5,6,10], 9),   2)
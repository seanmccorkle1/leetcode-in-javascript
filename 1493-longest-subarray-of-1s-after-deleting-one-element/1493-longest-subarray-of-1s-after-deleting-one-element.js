var longestSubarray = function(array) {

    let leftIndex = 0
    let rightIndex = 0

    let skip = 0
    let max = 1

    while (rightIndex < array.length){

        const currBit = array[rightIndex]

        if (currBit == 0) {
            ++skip
        }

        while (skip == 2){

            let leftBit = array[leftIndex]

            if (leftBit == 0) {
                --skip
            }

            leftIndex++
        }

        max = Math.max(max, (rightIndex - leftIndex) + 1)
        rightIndex++
    }

    // least value of max is 1 which means --> all elements are zero

    max
    return max - 1 
}

console.log(longestSubarray([1, 1, 0, 1]), 3)
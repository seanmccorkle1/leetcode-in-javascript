var longestSubarray = function (array) {

    let leftIndex = 0
    let rightIndex = 0

    let zeroCount = 0
    let max = 1

    // you have to delete exactly one
    if (array.length == 1){
        return 0
    }
    
    while (rightIndex < array.length) {

        const currBit = array[rightIndex]

        if (currBit == 0) {
            ++zeroCount
        }

        if (zeroCount == 2) {
            
            while (zeroCount == 2) {

                let leftBit = array[leftIndex]

                if (leftBit == 0) {
                    --zeroCount
                }

                leftIndex++
            }
        }

        max = Math.max((rightIndex - leftIndex) + 1, max)
        rightIndex++
    }

    // lowest value of max is 1, but it should be 0
    // for eg. []

    max
    return max - 1
}

console.log(longestSubarray([1, 1, 0, 1]), 3)
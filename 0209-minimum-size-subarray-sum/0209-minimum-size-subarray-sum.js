var minSubArrayLen = function (targetNum, array) {

    let left = 0
    let right = 0

    let sum = 0
    let minArrayLength = Infinity

    // contiguous means you CANT sort it
    array

    while (right < array.length) {

        left
        right

        array[right]

        sum
        sum += array[right]

        while (sum >= targetNum) {

            let length = (right - left) + 1

            minArrayLength = Math.min(length, minArrayLength)
            minArrayLength

            sum -= array[left]
            left++
        }

        right++
    }

    left
    right
    
    // if the sum was never greater
    
    if (minArrayLength == Infinity) {
        return 0
    }
    
    return minArrayLength
}

console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]), 8)

// console.log(minSubArrayLen(8, [1, 1, 1, 5, 1, 2]), 3, "[5, 1, 2] is contiguous and is >= 8")
// console.log(minSubArrayLen(15,[1,1,1,1]), 0, "the array cant sum to 15, return 0.")
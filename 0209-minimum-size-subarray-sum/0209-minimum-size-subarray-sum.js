/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (targetNum, array) {
    let left = 0
    let right = 0

    let sum = 0
    let minArrayLength = Infinity
    array

    while (right < array.length) {

        left
        right

        array[right]

        sum
        sum += array[right]

        while (sum >= targetNum) {
            let length = (right - left) + 1
        
            minArrayLength

            // if (length < minArrayLength) {
                minArrayLength = Math.min(length, minArrayLength)
            // }
            
            array[right]
            array[left]
            sum

            sum -= array[left]
            left++
        } // end of nested while

        right++
    }
    left
    right
    
    return minArrayLength === Infinity ? 0 : minArrayLength
}

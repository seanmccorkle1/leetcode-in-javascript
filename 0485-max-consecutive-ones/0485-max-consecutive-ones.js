var findMaxConsecutiveOnes = function (array) {

    let leftIndex = 0
    let rightIndex = 0
    let maxConsecutiveOnesFound = 0


    while (rightIndex < array.length) {

        const currBit = array[rightIndex]
        const currWindowOfConsecutiveOnes = (rightIndex - leftIndex) + 1

        if (currBit == 0){
            leftIndex = rightIndex + 1
        }
        else if (currBit == 1){
            maxConsecutiveOnesFound = Math.max(currWindowOfConsecutiveOnes, maxConsecutiveOnesFound)
        }
        
        rightIndex++
    }

    return maxConsecutiveOnesFound
}


console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1]), 3, "[1, 1, 1]. The highest number of consecutive ones is 3")
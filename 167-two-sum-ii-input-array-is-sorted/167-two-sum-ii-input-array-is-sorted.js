var twoSum = function (array, targetSum) {

    //exact sum
    let leftIndex = 0
    let rightIndex = array.length - 1

    while (leftIndex < rightIndex) {
        leftIndex
        rightIndex

        let sum = array[leftIndex] + array[rightIndex] // two sum

        if (sum === targetSum){
            return [leftIndex + 1, rightIndex+1]
        }

        if (sum > targetSum){ // too high, go down the sorted array
            rightIndex--
        }

        else {
            leftIndex++
        }
    }
}
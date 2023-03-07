var sortColors = function (array) {

    let leftIndex = 0
    let index = 0
    let rightIndex = array.length - 1
    
    let leftTemp = 0
    let rightTemp = 0

    // Swap red (0) to lefthand side


    while (index <= rightIndex) {

        const num = array[index]
        
        if (num == 0) {

            leftIndex

            array

            leftTemp = array[leftIndex]
            array

            array[leftIndex] = 0
            array[index] = leftTemp

            array

            // index and leftIndex both go up by 1, this is fine

            leftIndex++
            index++
        }

        // Swap blue (2) to the right
        else if (num == 2) {
            rightIndex
            rightTemp = array[rightIndex]

            array

            array[rightIndex] = 2
            array[index] = rightTemp

            array

            rightIndex--

            // index stays at this position, but the loop still progresses
            // because the condition is index <= rightIndex
        }

        // dont increment index on every loop, only if its 1
        else if (num == 1) {
            index++
        }
    }


    return array
}

// console.log(sortColors([2,0,2,1,1,0]), [0,0,1,1,2,2], "sort it")
console.log(sortColors([2, 0, 1]), [0, 1, 2])
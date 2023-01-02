/**
 * @param {number[]} array
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var sortColors = function(array) {

    const [RED, WHITE, BLUE] = [0, 1, 2]

    let leftIndex = 0
    let index = 0
    let rightIndex = array.length - 1
    
    let leftTemp
    let rightTemp

    // Swap red (0) to lefthand side

    while (index <= rightIndex) {

        let num = array[index]

        if (num == 0){

            leftIndex
            array

            leftTemp = array.at(leftIndex)

            // array[0] = 0 for the first one
            // all 0's go to the left

            array

            array[leftIndex] = 0   
            array[index] = leftTemp

            array

            // [ array[index], array[leftIndex] ] = [ array[leftIndex], array[index] ];

            leftIndex += 1
        }
        
        
        // Swap blue (2) to the right

        else if (num == 2) {
            rightIndex
            rightTemp = array.at(rightIndex)

            array

            array[rightIndex] = 2
            array[index] = rightTemp

            array            

            // [ array[index], array[rightIndex] ] = [ array[rightIndex], array[index] ];

            rightIndex -= 1

            // index stays at this position for one more loop on the next iteration
            continue
        }

        index += 1
    }

    array
}


console.log(sortColors([2,0,2,1,1,0]),  [0,0,1,1,2,2], "sort it")


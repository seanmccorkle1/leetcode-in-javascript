/**
 * @param {number[]} array
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var sortColors = function(array) {
    
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
            
            // index and leftIndex both go up by 1, this is fine
            
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
            
            rightIndex -= 1

            // index stays at this position, but the loop still progresses
            // because the condition is index <= rightIndex
            
            index -= 1
        }

        index += 1
    }

    array
}

// console.log(sortColors([2,0,2,1,1,0]),  [0,0,1,1,2,2], "sort it")
console.log(sortColors([2, 0, 1]), [0, 1, 2], "2 has to go from the front to back")
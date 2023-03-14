var fourSum = function(array, targetNum) {
    
    array = array.sort((a, b) => a - b)
    const resultArray = []
    
    for (let index = 0; index < array.length - 3; index += 1) {

        index
        for (let index2 = index + 1; index2 < array.length - 2; index2 += 1) {

            let index3 = index2 + 1
            let backIndex = array.length - 1
            
            // dont have two pointers on the same number, use <
            // go down to the 2-indexes level
            

            // dont increment index3 on every loop by using a while loop

            while (index3 < backIndex) {
                
                index3
                backIndex

                const sum = array[index] + array[index2] + array[index3] + array[backIndex]

                
                if (sum === targetNum) {

                    resultArray.push([array[index], array[index2], array[index3], array[backIndex]])

                    // at least two numbers have to be unique  
                    // use two while loops
                    
                    while (array[index3] === array[index3 + 1]) {
                        index3 += 1
                    }

                    while (array[backIndex] === array[backIndex - 1]) {
                        backIndex -= 1
                    }

                    index3 += 1
                    backIndex -=1
                }

                else if (sum < targetNum) {
                    index3 += 1
                }

                else if (sum > targetNum) {
                    backIndex -= 1
                }

            } // end while (index3 < backIndex)


            // check this on every loop

            while (array[index2] === array[index2 + 1]) {
                index2 += 1
            }
        }

        // in the `index` loop
        while (array[index] === array[index + 1]) {
            index += 1
        }
    } // end first for loop
    
    return resultArray
}


console.log(fourSum([3, 5, 3, 1, 1], target = 8), [3, 5, 3])
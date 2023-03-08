var compress = function (array) {

    let deleteCount = 0
    // let stringDigitArray = []

    let startDeleteIndex = 0

    // array[index+1] over array[index-1]
    
    // "a" automatically counts as 1 letter, not 0
    let adjacentCount = 1
    
    for (let backIndex = array.length - 2; backIndex >= 0; backIndex--) {

        array

        const leftNum = array[backIndex]
        const rightNum = array[backIndex + 1]

        const numsAreEqualAndAdjacent = (leftNum == rightNum)


        if (numsAreEqualAndAdjacent) {
            adjacentCount += 1
        }


        // adjacentCount starts at 1 because a single letter "b" is already length 1, 
        // ["z"] instead of ["z", 1]

        else if (!numsAreEqualAndAdjacent) {

            // only if the letters are unequal and (count >= 2)

            if (adjacentCount >= 2) {

                deleteCount = adjacentCount
                startDeleteIndex = backIndex + 2

            
                // split to get the digits ["1", "2"] instead of ["12"]

                if (adjacentCount >= 10) {

                    // stringDigitArray = String(adjacentCount).split("")
                    array.splice(startDeleteIndex, deleteCount - 1, ...String(adjacentCount))                    
                    array
                }

                // (backIndex  + 2) to start deleting at the SECOND "b
                // to get ["b", "1", "2"] instead of ["1", "2", "b"]
                else if (adjacentCount <= 9) {
                    array.splice(startDeleteIndex, deleteCount - 1, String(adjacentCount))
                }

                // res
                adjacentCount = 1
            }
        }

    }
    
    // if the letters were equal on the final loop, the splice wont happen
    adjacentCount
    array

    
    if (adjacentCount >= 2) {

        deleteCount = adjacentCount

        // if (adjacentCount >= 10) {
            // stringDigitArray = String(adjacentCount).split("")
            array.splice(1, deleteCount - 1, ...String(adjacentCount))
        // }

        // else if (adjacentCount <= 9) {
            // array.splice(1, deleteCount - 1, String(adjacentCount))
        // }
    }

    adjacentCount
    array

    return array.length
}

console.log(compress(["a", "a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "z"]), 6,
    `array should be modified to ['a', '2', 'b', '1', '2', 'z'] which is length 6. b12 becomes b 1 2`)

// console.log(compress(["a"]), 1)
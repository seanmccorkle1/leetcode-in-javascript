var generateMatrix = function (num) {

    const spiralMatrix = new Array(num).fill(0).map((zero) => new Array(num).fill(0))

    spiralMatrix

    let increment = 0
    const numOfMatrixElements = num * num
    
    // left:top
    // right:bottom
    
    let leftIndex = 0
    let rightIndex = num - 1
    
    let topIndex = 0
    let bottomIndex = num - 1
    
    // use < with 0
    // use <= with 1

    while (increment < numOfMatrixElements) {
        
        // do many small increments of 1 
        // than one  big increment of 4

        let refreshedLeftIndex = leftIndex

        // left-to-right, row doesnt change
        // chained to the top ROW

        while (refreshedLeftIndex <= rightIndex) {
            increment += 1
            spiralMatrix[topIndex][refreshedLeftIndex] = increment

            spiralMatrix
            refreshedLeftIndex++
        }

        topIndex += 1
        let refreshedTopIndex = topIndex

        // top-to-bottom, row changes
        // chained to the right ELEMENT (2nd access specifier)

        while (refreshedTopIndex <= bottomIndex) {

            increment += 1
            spiralMatrix[refreshedTopIndex][rightIndex] = increment

            spiralMatrix
            refreshedTopIndex++
        }

        rightIndex -= 1
        let refreshedRightIndex = rightIndex

        // right-to-left, row doesnt change
        // chained to the bottom ROW

        while (refreshedRightIndex >= leftIndex) {
            increment += 1
            spiralMatrix[bottomIndex][refreshedRightIndex] = increment

            spiralMatrix
            refreshedRightIndex--
        }

        bottomIndex -= 1
        let refreshedBottomIndex = bottomIndex

        increment

        // bottom-to-top, row changes
        // chained to the left ELEMENT
        
        while (refreshedBottomIndex >= topIndex) {

            increment += 1
            spiralMatrix[refreshedBottomIndex][leftIndex] = increment

            refreshedBottomIndex--
        }

        leftIndex += 1
    }
    
    return spiralMatrix
}

console.log(generateMatrix(3),
    [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
    ])
var generateMatrix = function (num) {

    const spiralMatrix = new Array(num).fill(0).map((zero) => new Array(num).fill(0))

    spiralMatrix

    let elementCount = 0
    const numOfMatrixElements = num * num
    
    // left:top
    // right:bottom
    
    let leftIndex = 0
    let rightIndex = num - 1
    
    let topIndex = 0
    let bottomIndex = num - 1
    
    // use < with 0
    // use <= with 1
    
    while (elementCount < numOfMatrixElements) {
        
        // do many small increments of 1 
        // than one  big elementCount of 4

        let refreshedLeftIndex = leftIndex

        // left-to-right, row doesnt change
        // chained to the top ROW

        while (refreshedLeftIndex <= rightIndex) {
            elementCount += 1
            spiralMatrix[topIndex][refreshedLeftIndex] = elementCount

            spiralMatrix
            refreshedLeftIndex++
        }

        topIndex += 1
        let refreshedTopIndex = topIndex

        // top-to-bottom, row changes
        // chained to the right ELEMENT (2nd access specifier)

        while (refreshedTopIndex <= bottomIndex) {

            elementCount += 1
            spiralMatrix[refreshedTopIndex][rightIndex] = elementCount

            spiralMatrix
            refreshedTopIndex++
        }

        rightIndex -= 1
        let refreshedRightIndex = rightIndex

        // right-to-left, row doesnt change
        // chained to the bottom ROW

        while (refreshedRightIndex >= leftIndex) {
            elementCount += 1
            spiralMatrix[bottomIndex][refreshedRightIndex] = elementCount

            spiralMatrix
            refreshedRightIndex--
        }

        bottomIndex -= 1
        let refreshedBottomIndex = bottomIndex

        elementCount

        // bottom-to-top, row changes
        // chained to the left ELEMENT
        
        while (refreshedBottomIndex >= topIndex) {

            elementCount += 1
            spiralMatrix[refreshedBottomIndex][leftIndex] = elementCount

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
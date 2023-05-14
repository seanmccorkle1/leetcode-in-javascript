var generateMatrix = function (num) {

    const spiralMatrix = new Array(num).fill(0).map((zero) => new Array(num).fill(0))

    spiralMatrix

    let counter = 0
    const numOfMatrixElements = num * num

    let leftIndex = 0
    let rightIndex = num - 1

    // the top row of the matrix is the first subarray, matrix[0]
    let topIndex = 0
    let bottomIndex = num - 1

    while (counter < numOfMatrixElements) {

        // do many small increments of 1 
        // than one  big counter of 4

        let localLeftIndex = leftIndex

        while (localLeftIndex <= rightIndex) {

            counter += 1
            spiralMatrix[topIndex][localLeftIndex] = counter

            spiralMatrix
            localLeftIndex++
        }

        topIndex += 1        
        let localTopIndex = topIndex

        // change the row (changing variable is the 1st access specifier) 
        // anchor to the right ELEMENT, (ie. unchanging variable goes on the 2nd access specifier (element specifier))

        while (localTopIndex <= bottomIndex) {

            counter += 1
            spiralMatrix[localTopIndex][rightIndex] = counter

            spiralMatrix
            localTopIndex++
        }

        rightIndex -= 1        
        let localRightIndex = rightIndex

        while (localRightIndex >= leftIndex) {
            counter += 1
            spiralMatrix[bottomIndex][localRightIndex] = counter

            spiralMatrix
            localRightIndex--
        }

        bottomIndex -= 1
        let localBottomIndex = bottomIndex

        counter

        while (localBottomIndex >= topIndex){

            counter += 1
            spiralMatrix[localBottomIndex][leftIndex] = counter
            
            localBottomIndex--
        }

        leftIndex+= 1
    }

    return spiralMatrix

}

console.log(generateMatrix(3),
    [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
    ])
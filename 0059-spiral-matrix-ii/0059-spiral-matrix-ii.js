var generateMatrix = function (num) {

    // 3 new arrays
    const spiralMatrix = new Array(num).fill(0).map((three) => new Array(num).fill(0))

    spiralMatrix

    const numOfMatrixElements = num * num

    // left:top
    // right:bottom

    let leftIndex = 0
    let rightIndex = num - 1

    let topIndex = 0
    let bottomIndex = num - 1

    // use < with 0
    // use <= with 1
    let increment = 1

    while (increment <= numOfMatrixElements) {

        let refreshedLeftIndex = leftIndex

        while (refreshedLeftIndex <= rightIndex) {
            spiralMatrix[topIndex][refreshedLeftIndex] = increment

            refreshedLeftIndex++
            increment+=1
        }
        
        topIndex += 1
        let refreshedTopIndex = topIndex


        while (refreshedTopIndex  <= bottomIndex){

            spiralMatrix[refreshedTopIndex][rightIndex] = increment
            refreshedTopIndex++
            increment +=1
        }

        rightIndex -= 1
        let refreshedRightIndex = rightIndex

        while (refreshedRightIndex >= leftIndex){

            spiralMatrix[bottomIndex][refreshedRightIndex] = increment

            refreshedRightIndex--
            increment++
        }

        bottomIndex  -=  1
        let refreshedBottomIndex = bottomIndex

        while (refreshedBottomIndex >= topIndex) {

            spiralMatrix[refreshedBottomIndex][leftIndex] = increment
            refreshedBottomIndex--
            increment++
        } 

        leftIndex += 1

        spiralMatrix

    }
    return spiralMatrix
}

console.log(generateMatrix(3),
    [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
    ])
// only down and right are allowed
var uniquePathsWithObstacles = function (matrix) {

    if (matrix[0][0] == 1) {
        return 0 // blocked
    }

    let continues = 0

    let numOfRows = matrix.length // rows
    let numOfColumns = matrix[0].length

    const selfArray = new Array(numOfRows).fill("a").map(a => new Array(numOfColumns).fill(0))

    selfArray[0][0] = 1
    selfArray

    for (let rowIndex = 0; rowIndex < numOfRows; rowIndex++) {

        selfArray

        for (let colIndex = 0; colIndex < numOfColumns; colIndex++) {

            let currCell = matrix[rowIndex][colIndex]

            const isFirstMove = rowIndex == 0 && colIndex == 0
            const cellIsObstacle = currCell == 1

            if (cellIsObstacle || isFirstMove) {
                ++continues
                continue // go right without adding
            }

            // otherwise its array[-1]

            rowIndex
            colIndex

            if (rowIndex >= 1) {
                let cellAbove = selfArray[rowIndex - 1][colIndex]
                selfArray[rowIndex][colIndex] += cellAbove
            }

            if (colIndex >= 1) {
                let leftCell = selfArray[rowIndex][colIndex - 1]
                selfArray[rowIndex][colIndex] += leftCell
            }

            selfArray
        }
        
        rowIndex
        selfArray
    }

    // [1, 1, 0],
    // [0, 0, 0]

    // [1, 1, 1],
    // [0, 0, 0]

    // [1, 1, 1],
    // [1, 0, 0]

    // [1, 1, 1],
    // [1, 2, 0]

    // [1, 1, 1],
    // [1, 2, 3]

    selfArray
    return selfArray[numOfRows - 1][numOfColumns - 1]
}

uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 0, 0],
]) // 3


// uniquePathsWithObstacles([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0]
// ]) // 2
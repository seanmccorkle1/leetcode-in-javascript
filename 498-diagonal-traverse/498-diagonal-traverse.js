/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {

    let rows = matrix.length
    let columns = matrix[0].length

    // fill then map
    
    // so you can unshift and push into the arrays
    const diagonalArray = new Array(rows + columns - 1).fill(null).map(null1 => [])

    // [2,4]  [7,5,3]  are grouped together cause theyre lines

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        rowIndex
        diagonalArray


        // loop through columns
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            columnIndex

            if ((rowIndex + columnIndex) % 2 === 0) {
                rowIndex
                columnIndex
                
                diagonalArray[rowIndex + columnIndex].unshift(matrix[rowIndex][columnIndex])
            }

            // moving downwards at the even position (1-indexed), down means to the right, so push it.

            else {
                rowIndex
                columnIndex
                diagonalArray[rowIndex + columnIndex].push(matrix[rowIndex][columnIndex])
            }

            diagonalArray
        }
    }

    diagonalArray
    return diagonalArray.flat()
}

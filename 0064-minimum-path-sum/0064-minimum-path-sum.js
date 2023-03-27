var minPathSum = function (grid) {

    // Get the two dimensions of the grid
    const numOfRows = grid.length
    const numOfColumns = grid[0].length

    // Calculate the distance travelled within the first column.

    // This is because each square depends on the one above
    // and on the one to the left. 

    // However there is nothing left of the first column so we can
    //  calculate it by adding the current square to the square above it

    grid

    // [ [ 1, 3, 1 ]
    //   [ 1, 5, 1 ] 
    //   [ 4, 2, 1 ] ]

    // [ [ 1, 3, 1 ]
    //   [ 2, 5, 1 ] 
    //   [ 6, 2, 1 ] ]

    // go down the 1st column and update

    firstColumn:
        for (let index = 1; index < numOfRows; index++) {

            const cellAbove = grid[index - 1][0]

            // if youre referencing a number instead of an array, 
            // you cant make it a veriable

            grid[index][0] += cellAbove
        }

    // The same goes for the first row. There is nothing above the first row.
    // So we just calculate the distance by what is to the left of it

    // [ 1, 3, 1 ] 

    // [ 1, 4, 5 ] 

    // go right on the 1st row and update

    firstRow:

        for (let index = 1; index < numOfColumns; index++) {
            const leftCell = grid[0][index - 1]
            grid[0][index] += leftCell
        }

    // Start one row and one column in because we've precomputed those above
    // you cant go directly diagonal, but you can go one down and one right to get to 5
    
    for (let rowIndex = 1; rowIndex < numOfRows; rowIndex++) {

        //   [ 1, 4, 5 ]
        //   [ 2, 5, 1 ]
        //   [ 6, 2, 1 ] 

        //   [ 1, 4, 5 ]
        //   [ 2, 7, 6 ]
        //   [ 6, 2, 1 ]

        for (let columnIndex = 1; columnIndex < numOfColumns; columnIndex++) {

            // The distance to the grid at i,j is equal to itself plus the minimum
            // of the two grid spaces (one above, one to the left)

            rowIndex
            columnIndex

            let cellAbove = grid[rowIndex - 1][columnIndex]
            let leftCell  = grid[rowIndex][columnIndex - 1]

            cellAbove
            leftCell

            grid[rowIndex][columnIndex] 

            const lowerValueOfBothCells = Math.min(cellAbove, leftCell)
            grid[rowIndex][columnIndex] += lowerValueOfBothCells

            grid[rowIndex][columnIndex]
        }
    }

    // [ 1, 4, 5 ] 
    // [ 2, 7, 6 ]
    // [ 6, 8, 7 ]

    // Return the distance bottom right corner
    let bottomRightCell =grid[numOfRows - 1][numOfColumns - 1]

    return bottomRightCell
}


console.log(
    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]),
    7, "the path 1 → 3 → 1 → 1 → 1 minimizes the sum")
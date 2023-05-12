var minPathSum = function (grid) {
    
    // Get the two dimensions of the grid
    const numOfRows = grid.length
    const numOfColumns = grid[0].length
    
    // Each square depends on the one above and on the one to the left.
    // whichever is smaller
    
    // However there is nothing left of the first column so we can
    // calculate it by adding the square above it to the current square
    
    grid
    
    // [ [ 1, 3, 1 ]
    // [ 1, 5, 1 ]
    // [ 4, 2, 1 ] ]


    // [ [ 1, 3, 1 ]
    // [ 2, 5, 1 ]
    // [ 6, 2, 1 ] ]


    // go down the 1st column and update
    
    firstColumn:
    
        for (let index = 1; index < numOfRows; index++) {
            
            // all the leftmost cells are at grid[num][0]
            const cellAbove = grid[index - 1][0]
            
            // if youre referencing a number instead of an array,
            // you cant make it a veriable
            
            // grid[index][0] is the current cell
            // if you assign it, you just get a number literal
            
            grid[index][0] += cellAbove
        }


    // The same goes for the first row. There is nothing above the first row.
    // So we just calculate the distance by what is to the left of it


    // [ 1, 3, 1 ]
    // [ 1, 4, 5 ]
    
    // left-to-right on the first row
    
        for (let index = 1; index < numOfColumns; index++) {
            
            // other way around
            
            const leftCellValue = grid[0][index - 1] 
            grid[0][index] += leftCellValue
        }
    
    // Start one row and one column in because we've precomputed those above
    // you cant go directly diagonal, but you can go one down and one right to get to 5
    
    // [ 1, 4, 5 ]
    // [ 2, 5, 1 ]
    // [ 6, 2, 1 ]


    // [ 1, 4, 5 ]
    // [ 2, 7, 6 ]
    // [ 6, 2, 1 ]
    
    for (let rowIndex = 1; rowIndex < numOfRows; rowIndex++) {
        
        let columnIndex = 1
        
        while (columnIndex <numOfColumns) {            
            
            // The distance to the grid at i,j is equal to itself plus the minimum
            // of the two grid spaces (one above, one to the left)
            
            rowIndex
            columnIndex
            
            let topCell = grid[rowIndex - 1][columnIndex]
            let leftCell = grid[rowIndex][columnIndex - 1]
            
            topCell
            leftCell
            
            // if you do (let v = grid[rowIndex][columnIndex])
            // it just makes "v" point to a primitive integer, not a spot in the array
            
            const currMinCell = Math.min(topCell, leftCell)

            grid[rowIndex][columnIndex]
            grid[rowIndex][columnIndex] += currMinCell
            
            columnIndex++
        }
    }
    
    // [ 1, 4, 5 ]
    // [ 2, 7, 6 ]
    // [ 6, 8, 7 ]
    
    // Return the distance bottom right corner
    
    while (typeof grid.at(-1) != "number"){
        grid = grid.flat(1)
    }
    
    let bottomRightCell = grid.at(-1)

    return bottomRightCell
}

console.log(
    minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]),
    7, "the path 1 → 3 → 1 → 1 → 1 minimizes the sum")
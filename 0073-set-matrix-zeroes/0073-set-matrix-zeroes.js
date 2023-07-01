// Do not return anything, modify matrix in-place instead.

var setZeroes = function (matrix) {

    // let
    let zeroCoordinateArray = []

    // find zeros

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {

        for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {

            const num = matrix[rowIndex][columnIndex]

            if (num == 0) {
                const coordinateSubarray = [rowIndex, columnIndex]
                zeroCoordinateArray.push(coordinateSubarray)
            }

        }
    }

    zeroCoordinateArray


    // for each 0 found (each subarray), 
    // update all rows and columns with the 2 for loops

    for (let index = 0; index < zeroCoordinateArray.length; index++) {

        let [x, y] = zeroCoordinateArray[index]
        
        // update a fixed row with varying columns
        // use number of elements in a subarray (matrix[0])
        // because youre going through the row 
        
        for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
            matrix[x][columnIndex] = 0
        }
        
        // update a fixed column with varying rows
        // go down the matrix subarrays, use matrix.length
        
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            matrix[rowIndex][y] = 0
        }
    }

}

console.log(
    setZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ]),

    [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
    ])
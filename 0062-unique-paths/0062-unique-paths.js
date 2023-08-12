var uniquePaths = function (numOfRows, numOfCols) {

    numOfRows
    numOfCols

    const array = new Array(numOfRows).fill(new Array(numOfCols).fill(1))

    //  [[ 1, 1, 1, 1, 1, 1, 1 ],
    //   [ 1, 1, 1, 1, 1, 1, 1 ],
    //   [ 1, 1, 1, 1, 1, 1, 1 ]]

    // avoid array[-1][-1]
    for (let rowIndex = 1; rowIndex < numOfRows; rowIndex++) {

        for (let colIndex = 1; colIndex < numOfCols; colIndex++) {

            rowIndex
            colIndex

            let topCell = array[rowIndex - 1][colIndex]
            let leftCell = array[rowIndex][colIndex - 1]

            // unique paths to the end =
            // number of paths reached up to to one step left +
            // number of paths reached up to to one step up

            let bothWays = topCell + leftCell
            
            array

            // overwrite to get 2 on the first loop instead of 3
            array[rowIndex][colIndex] = bothWays
        }

        array
    }

    array
    return array[0][numOfCols-1]
    // return array[numOfRows - 1][numOfCols - 1]
}

uniquePaths(3, 7) // 28
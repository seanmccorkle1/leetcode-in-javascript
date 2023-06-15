var equalPairs = function (matrix) {
    
    matrix
    
    const rowArray = matrix.map(row => row.join(","))

    const columnArray = matrix[0].map((col, i) => 
                                      matrix.map(row => row[i]).join(","))
    
    rowArray
    columnArray
    
    let count = 0
    
    for (let rowString of rowArray) {
        
        for (let columnString of columnArray) {

            if (rowString == columnString) {
                ++count
            }

        }
    }

    return count
}

// equalPairs([[3,2,1],[1,7,6],[2,7,7]])

console.log(
    equalPairs([
        [13,13],
        [13,13]]),  4)

// console.log(
//     equalPairs([
//         [3, 2, 1],
//         [1, 7, 6],
//         [2, 7, 7]
//     ]),
//     1, "[2,7,7] is the pair")
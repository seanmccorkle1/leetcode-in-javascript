var equalPairs = function (matrix) {

    matrix

    // if (matrix.length == 1) {
    //     return 1
    // }

    const rowArray = matrix.map(row => row.join())
    const columnArray = matrix[0].map((col, i) => matrix.map(row => row[i]).join())

    rowArray
    columnArray

    // let array = rowArray.concat(columnArray)
    // array = array.filter(string => array.indexOf(string) != array.lastIndexOf(string))


    let count = 0

    for (let row of rowArray) {

        for (let column of columnArray) {

            if (row == column) {
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
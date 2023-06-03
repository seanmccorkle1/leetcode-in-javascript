// origin_matrix  colIndex        origin_col_arr

var transpose = function(matrix) {

    let firstRow=matrix[0]

    // `row` acts as the index for the row
    // turn each number (n) into an array (return value of map())

    // [2, 4, -1][0]
    // [-10, 5, 11][1]
    // [18, -7, 6][2]

    
    return firstRow.map((n,  index) => matrix.map(row => row[index]))
}

console.log(
    transpose([
        [2, 4, -1], 
        [-10, 5, 11], 
        [18, -7, 6]]),
    
       [[2, -10, 18], 
        [4, 5, -7], 
        [-1, 11, 6]])
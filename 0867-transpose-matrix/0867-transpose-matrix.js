var transpose = function(matrix) {
    
    // turn each number (n) into an array 
    
    const firstRow=matrix[0]

    // firstRow and matrix both have 3 elements (n x n)
    // nested map function
    
    return firstRow.map((n, index) => matrix.map(row => row[index]))
}

console.log(
    transpose([
        [2, 4, -1], 
        [-10, 5, 11], 
        [18, -7, 6]]),
    
       [[2, -10, 18], 
        [4, 5, -7], 
        [-1, 11, 6]])
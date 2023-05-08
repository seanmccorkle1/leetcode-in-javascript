var diagonalSum = function(matrix) {

    // side length
    // mid point index
    let mid = Math.floor(matrix.length / 2)

    // summation of diagonal element
    let summation = 0
    let backIndex = matrix.length - 1

    for (let index = 0; index < matrix.length; index++) {

        const currValue = matrix[index][index]

        // primary diagonal
        summation += currValue

        // secondary diagonal
        summation += matrix[backIndex][index]
        backIndex--
    }

    if( matrix.length % 2 == 1 ){

        // remoive center element (repeated) on odd side-length case
        summation -= matrix[mid][mid];
    }

    return summation;
}
console.log(diagonalSum(
    [[1,2,3],
    [4,5,6],
    [7,8,9]]), 25)
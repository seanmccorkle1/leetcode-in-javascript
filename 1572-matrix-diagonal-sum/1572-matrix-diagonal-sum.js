var diagonalSum = function(matrix) {

    // side length
    // midIndex point index
    let midIndex = Math.floor(matrix.length / 2)

    // sum of diagonal element
    let diagonalSum = 0
    let backIndex = matrix.length - 1

    for (let index = 0; index < matrix.length; index++) {

        const primaryDiagonalValue = matrix[index][index]
        const secondaryDiagonalValue = matrix[backIndex][index]

        diagonalSum += primaryDiagonalValue
        diagonalSum += secondaryDiagonalValue        

        backIndex--
    }

    const matrixIsOdd = (matrix.length % 2 == 1) ? true : undefined ?? ""

    
    // remove the center element (repeated)
    // for the "odd side-length" case

    if (matrixIsOdd){        
        diagonalSum -= matrix[midIndex][midIndex];
    }

    return diagonalSum;
}

console.log(diagonalSum(
   [[1,2,3],
    [4,5,6],
    [7,8,9]])
    , 25)
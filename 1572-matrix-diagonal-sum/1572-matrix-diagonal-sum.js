var diagonalSum = function (matrix) {

    let diagonalSum = 0
    let backIndex = matrix.length - 1

    const matrixIsOdd = (matrix.length % 2) == 1

    let midIndex = ~~(matrix.length / 2)
    let midValue = matrix[midIndex][midIndex]

    if (matrixIsOdd){
        diagonalSum -= midValue
    }
        
    let index = 0

    while (backIndex >= 0) {

        diagonalSum += matrix[index][index]
        diagonalSum += matrix[backIndex][index]

        index++
        backIndex--
    }


    return diagonalSum
}

console.log(
    diagonalSum(
        [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]])
         , 25)
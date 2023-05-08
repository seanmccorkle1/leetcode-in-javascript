var diagonalSum = function(matrix) {
    
    let backIndex = matrix.length - 1
    
    let diagonalSum = 0

        const matrixIsOdd = (matrix.length % 2) == 1
    
    let midIndex = Math.floor(matrix.length / 2)
    let midValue = matrix[midIndex][midIndex]
    
    if (matrixIsOdd) {
        diagonalSum -= midValue
    }

    for (let index = 0; index < matrix.length; index++) {

        const primaryDiagonalValue = matrix[index][index]
        const secondaryDiagonalValue = matrix[backIndex][index]

        diagonalSum += primaryDiagonalValue
        diagonalSum += secondaryDiagonalValue        

        backIndex--
    }
    
    // if its an odd-length matrix, 
    
    // 5 was repeated as [5, 5]
    // remove it once to just get 5
    
    return diagonalSum
}

console.log(diagonalSum(
   [[1,2,3],
    [4,5,6],
    [7,8,9]])
    , 25)
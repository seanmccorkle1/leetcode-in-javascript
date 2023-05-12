var diagonalSum = function(matrix) {
    
    let diagonalSum = 0
    let backIndex = matrix.length - 1

    const matrixIsOdd = (matrix.length % 2) == 1 ? true : false
    
    let midIndex = Math.floor(matrix.length / 2)
    let midCell = matrix[midIndex][midIndex]
    
    if (matrixIsOdd){
        diagonalSum -= midCell
    }
    
    for (let index=0; index<  matrix.length; index++){
        let primaryDiagonalValue =  matrix[index][index]
        let secondary = matrix[backIndex][index]

        
        diagonalSum+=primaryDiagonalValue
        diagonalSum+=secondary
        
        backIndex--
    }
    return diagonalSum
}

console.log(
    diagonalSum(
        [[1,2,3],
         [4,5,6],
         [7,8,9]])
         , 25)
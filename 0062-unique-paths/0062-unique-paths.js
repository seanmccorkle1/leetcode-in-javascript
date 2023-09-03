// uniquePaths is below

const factorial = (num) => {
    
    if (num == 0 || num == 1) {
        return 1
    }
    
    // recursiveFn(x - 1)
    return num * factorial(num - 1)
}

// From start to destination, we need (m-1) ↓ moves and (n-1) → moves
// Thus, the number of unique paths is the number of permutations of (m-1) ↓ and (n-1) →

// Number of unique paths = ( m-1 + n-1 ) ! / (m-1)! * (n-1)!

var uniquePaths = function (numOfRows, numOfCols) {

    numOfRows
    numOfCols
    
    let adjustedRowsAndCols = (numOfRows - 1) + (numOfCols - 1)  
    
    let numerator = factorial(adjustedRowsAndCols)
    
    let denominatorNum1 = factorial(numOfRows - 1)
    let denominatorNum2 = factorial(numOfCols - 1)
    
    let denominator = denominatorNum1 * denominatorNum2

    numerator
    denominator
    
    //  factorials are always integers, 
    //~~ messes the results up
    
    let numOfUniquePaths = numerator / denominator
    return numOfUniquePaths
}


uniquePaths(3, 7) // 28 | 28 unique paths
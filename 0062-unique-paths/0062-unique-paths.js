var factorial = function (num) {

    if (num == 0 || num == 1) {
        return 1
    }

    return num * factorial(num - 1)
}

// From start to destination, we need (m-1) ↓ moves and (n-1) → moves
// Thus, the number of unique paths is the number of permutations of (m-1) ↓ and (n-1) →

// Number of unique paths = ( m-1 + n-1 ) ! / (m-1)! * (n-1)!

var uniquePaths = function (numOfRows, numOfCols) {

    numOfRows
    numOfCols

    let big = (numOfRows - 1) + (numOfCols - 1) 

    big
    let numerator = factorial(big)

    let x = factorial(numOfRows - 1)
    let y = factorial(numOfCols - 1)

    let denom = x*y

    numerator
    denom
    
    // there wont be a decimal number of paths
    let numOfUniquePaths = numerator / denom
    return numOfUniquePaths
}

uniquePaths(3, 7) // 28
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

    let numerator = factorial(numOfRows - 1 + numOfCols - 1)
    let denom = factorial(numOfRows - 1) * factorial(numOfCols - 1)

    let numOfUniquePaths = numerator / denom

    return numOfUniquePaths

    // let pathCount = factorial( m-1 + n-1 ) / ( factorial( m-1 ) * factorial( n-1 ) )
    // return pathCount
}

uniquePaths(3, 7) // 28
// uniquePaths(3, 8) // 36
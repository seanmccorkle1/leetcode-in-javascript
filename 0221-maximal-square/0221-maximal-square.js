var maximalSquare = function (matrix) {

    if (!matrix.length) {
        return 0
    }

    matrix

    let dp = new Array(matrix.length + 1).fill(0)
    // let dp = new Array(matrix[0].length).fill(0)

    dp = dp.map((n) => new Array(matrix[0].length + 1).fill(0))
    dp

    let max = 0

    let numOfRows = dp.length
    let numOfColumns = dp[0].length

    for (let rowIndex = 1; rowIndex < numOfRows; rowIndex++) {

        for (let columnIndex = 1; columnIndex < numOfColumns; columnIndex++) {

            const matrixNum = Number(matrix[rowIndex - 1][columnIndex - 1])

            let leftNum = dp[rowIndex][columnIndex - 1]
            let topNum = dp[rowIndex - 1][columnIndex]
            let currNum = dp[rowIndex - 1][columnIndex - 1]

            if (matrixNum != 0) {

                dp[rowIndex][columnIndex] = Math.min(currNum, leftNum, topNum)
                dp[rowIndex][columnIndex] += 1

                dp
                max = Math.max(dp[rowIndex][columnIndex], max)
            }
        }
    }
    
    dp
    max

    // "square"
    return Math.pow(max, 2)
}

maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]) // 4
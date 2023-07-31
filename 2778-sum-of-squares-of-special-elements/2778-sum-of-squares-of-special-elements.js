

var sumOfSquares = function (array) {

    array
    let sum = 0

    // one-indexed
    array = array.filter((num, index) => Number.isInteger(array.length / ++index))
    return array.reduce((sum, curr) => sum + Math.pow(curr, 2), 0)
}

// sumOfSquares([1, 2, 3, 4]) // 21

sumOfSquares([2,7,1,19,18,3]) // 63
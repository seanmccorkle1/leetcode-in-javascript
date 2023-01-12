/**
 * 
 * @function
 * @return
 * 
 */

var judgeSquareSum = function(num) {

    let leftPointer = 0
    let rightPointer = Math.floor(Math.sqrt(num))

    // there can only be 2 multiples, a and b

    while (leftPointer <= rightPointer) {

        let leftSquare = Math.pow(leftPointer, 2)
        let rightSquare = Math.pow(rightPointer, 2)

        const sumofSquares = leftSquare + rightSquare

        // const sumofSquares = Math.pow(leftPointer, 2) + Math.pow(rightPointer, 2)
        // const sumofSquares  = leftPointer**2 + rightPointer**2

        if (sumofSquares == num) {
            return true
        }

        else if (sumofSquares < num) {
            leftPointer += 1
        }

        else if (sumofSquares > num) {
            rightPointer -=1
        }
    }
    
    return false
}

// console.log(judgeSquareSum(5),  true)
// console.log(judgeSquareSum(144),  true)

console.log(judgeSquareSum(11),   false)
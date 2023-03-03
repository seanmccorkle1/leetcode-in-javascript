// Next capital one questions:

// * Coin Change	35.5%	Medium	1.08	https://leetcode.com/problems/coin-change
// * Add Two Numbers	33.9%	Medium	1.25	https://leetcode.com/problems/add-two-numbers
// * Greatest Common Divisor of Strings	52.9%	Easy	0.12	https://leetcode.com/problems/greatest-common-divisor-of-strings


// Named default parameters:

// var multiplyTwo =  ({num1, num2 } = {}) =>  num1*num2
// console.log(multiplyTwo({ num1: 4, num2: 4}),  16)


var judgeSquareSum = function (targetNum) {

    let root1 = 0

    // start near the result
    let root2 = Math.floor(Math.sqrt(targetNum))

    if (Math.pow(root2, 2) == targetNum) {
        return true
    }

    root1
    root2

    // keep going until the roots converge

    // for 146, start from 0 and 12,
    // slowly converge to 5 and 11
    
    // (1x1) +(1x1) =  2
    // and they are <= each other

    let closestDistance = Infinity

    while (root1 <= root2) {

        let leftSquare = Math.pow(root1, 2)
        let rightSquare = Math.pow(root2, 2)

        targetNum

        root1
        root2

        const sumOfSquares = leftSquare + rightSquare
        sumOfSquares


        if (sumOfSquares == targetNum) {
            return true
        }

        // slowly go higher by turning 0 to 1
        // dont turn 12 to 13 to go higher

        else if (sumOfSquares < targetNum) {
            root1 += 1
        }

        // have to change root2 too
        else if (sumOfSquares > targetNum) {
            root2 -= 1
        }

        root1
        root2
    }

    return false
}

console.log(judgeSquareSum(2), true, "(1x1 + 1x1) => (1 + 1) => 2")

// console.log(judgeSquareSum(144), true, "0 squared is (0x0)=0")
// console.log(judgeSquareSum(146), true, "(11^2 + 5^2) = (121 + 25) = 146")

// console.log(judgeSquareSum(11), false, "no 2 square roots exist that sum to 11")
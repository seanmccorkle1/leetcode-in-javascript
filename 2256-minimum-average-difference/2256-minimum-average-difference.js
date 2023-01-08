/**
 * 
 * @function
 * @return
 * 
 */


var minimumAverageDifference = function (array) {

    let leftSum = 0
    let rightSum = array.reduce((s, c) => s + c, 0)

    let minDifference = Infinity
    let indexOfMinDifference = 0

    // parantheses on (index+1) cause theres / and +
    //Math floor so you dont get array decimal with the division

    leftSum
    rightSum

    // (array.length - index - 1) means it progressively goes down

    // i=0 (6 - 0 - 1 = 5)
    // i=1 (6 - 1 - 1 = 4)
    // i = 2(6 - 2 -1 = 3)

    // start at array high denominator and end at x/1

    for (let index = 0; index < array.length; index += 1) {

        let num = array[index]

        // leftSum starts at 2
        // rightSum leavs out  the 2 by doing (rightSum -= 2)

        leftSum += num
        rightSum -= num

        leftSum
        rightSum

        let leftSumDenominator = index + 1 // start at (x / 1)
        let rightSumDenominator = (array.length - index) - 1

        if (rightSumDenominator == 0) {
            rightSumDenominator = 1
        }

        // start at (leftSum / 1) with leftSum / (index + 1)
        // with index=0, that way you still get array[0]


        // floor(19 / 4) - (12 / 3) => 4 - 4

        let leftSumAvg = Math.trunc(leftSum / leftSumDenominator)
        let rightSumAvg = Math.trunc(rightSum / rightSumDenominator)

        let absDifference = Math.abs(leftSumAvg - rightSumAvg)

        if (absDifference < minDifference) {
            minDifference = absDifference
            indexOfMinDifference = index // store this specific index

            // 0 is the lowest possible absolute absDifference
            if (minDifference == 0) {
                return indexOfMinDifference
            }
        }
    }

    return indexOfMinDifference
}

console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3]), 3,
    "index 3 is (2 + 5 + 3 + 9) =>  floor(19/ 4) for leftSum and (5 + 3) => floor(8 / 2) for rightSum, this gives a difference of 0, the lowest possible")

// console.log(minimumAverageDifference([12]), 0, "the only possible index is 0")
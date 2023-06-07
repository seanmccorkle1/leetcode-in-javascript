var pivotInteger = function (num) {


    let leftSum = 1
    let rightSum = Array.from({length: num}, (u, index) => ++index).reduce((sum, num) => sum + num, 0)

    if (num == 1) {
        return 1
    }

    leftSum
    rightSum

    let index = 2

    while (index <= num) {

        if (leftSum == rightSum) {
            return index
        }

        leftSum += index
        rightSum -= (index - 1)

        // rightSum -= ((num - index) + 1)

        if (leftSum == rightSum) {
            return index
        }

        index++
    }

    return -1
}

console.log(pivotInteger(8), 6)

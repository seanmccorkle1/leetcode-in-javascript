var pivotInteger = function (num) {
    
    if (num == 1) {
        return 1
    }

    // instead of initializing both to 0,
    // initialize it to [1, allNums] for [leftSum, rightSum]
    
    let leftSum = 1
    let rightSum = Array.from({length: num}, (u, index) => ++index).reduce((sum, num) => sum + num, 0)

    leftSum
    rightSum
    
    let index = 2

    while (index <= num) {

        if (leftSum == rightSum) {
            return index
        }

        leftSum += index
        rightSum -= (index - 1)

        if (leftSum == rightSum) {
            return index
        }

        index++
    }

    return -1
}   

console.log(pivotInteger(8), 6)
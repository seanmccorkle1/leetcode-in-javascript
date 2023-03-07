var commonFactors = function (num1, num2) {

    let factorCount = 0

    // only go to the lower of the 2 numbers
    const lowerNum = Math.min(num1, num2)

    // index <= lowerNum

    for (let index = 0; index <= lowerNum; index++) {
        index

        // num1/index
        // num2/index

        if (Number.isInteger(num1/index) && Number.isInteger(num2/index)){
            factorCount++
        }
    }

    return factorCount
}

console.log(commonFactors(12, 24), 6, "[1, 2, 3, 4, 6, 12] are the 6 common factors of both nums")

// console.log(commonFactors(1, 6), 1, "1 is the only common factor")
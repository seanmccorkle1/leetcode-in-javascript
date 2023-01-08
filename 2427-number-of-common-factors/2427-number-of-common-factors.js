var commonFactors = function (num1, num2) {

    num1
    num2

    let factorCount = 0
    
    // only go to the lower of the 2 numbers
    const lowerNum = Math.min(num1, num2)

    // index <= lowerNum
    
    for (let index = 1; index <= lowerNum; index++) {

        index

        let quotient1 = num1 / index
        let quotient2 = num2 / index

        const commonFactorFound = Number.isInteger(quotient1) && Number.isInteger(quotient2)

        if (commonFactorFound) {
            factorCount += 1
        }
    }

    return factorCount
}

console.log(commonFactors(12, 24), 6, "[1, 2, 3, 4, 6, 12] are the 6 common factors of both numbs")
// console.log(commonFactors(1, 6),  1,  "1 is the only common factor")
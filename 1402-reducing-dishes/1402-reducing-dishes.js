var maxSatisfaction = function (array) {

    let maxNum = 0
    // let multiplierThatStartsFrom1= 0
    // let currSumOfProducts = 0 
    
    array.sort((a, b) => a - b)

    for (let index = 0; index < array.length; index++) {

        // reset
        let currSumOfProducts = 0

        // [2, 3, 4]
        // [3, 4]
        // [4]

        for (let index2 = index; index2 < array.length; index2++) {

            array

            const currNum = array[index2]
            let startFrom1Index = (index2 - index) + 1

            const currProduct = currNum * startFrom1Index

            currSumOfProducts += currProduct
        }

        currSumOfProducts
        maxNum

        if (currSumOfProducts > maxNum) {
            maxNum = currSumOfProducts

            // if theres no negatives, this will be the highest

            if (array[0] >= 0) {
                return maxNum
            }

        }
    }

    return maxNum
}

// console.log(maxSatisfaction([2, 3, 4]), 20, "early return this")
// console.log(maxSatisfaction([0, 2, 3, 4]), 29, "0x1 + 2x2 + 3x3 + 4x4 = (16 + 4  + 2) = 29, start from (Nx1) every time")

console.log(maxSatisfaction([-8, -2, 2, 5]),   17, "-2x1 + 2x2 + 5x3 = (-2 + 4 + 15) = 17")
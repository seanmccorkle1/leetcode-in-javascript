var maxSatisfaction = function (array) {

    let maxSum = 0
    array.sort((a, b) => a - b)
    
    const arrayHasPositives = array.find(num => num >=1) ? true:false
    
    if (!arrayHasPositives) {
        return 0
    }
    
    for (let index = 0; index < array.length; index++) {

        // reset
        let currSumOfProducts = 0

        // [2, 3, 4]
        // [3, 4]
        // [4]

        for (let index2 = index; index2 < array.length; index2++) {

            array

            let currNum = array[index2]
            let multiplierThatStartsFrom1 = (index2 - index) + 1

            const currProduct = currNum * multiplierThatStartsFrom1

            currSumOfProducts += currProduct
        }

        currSumOfProducts
        maxSum
        
        if (currSumOfProducts > maxSum) {
            maxSum = currSumOfProducts
            
            // if theyre all 0 or more, this will be the highest
            // 5x6 is higher than 5x5
            
            if (array[0] >= 0) {
                return maxSum
            }

        }
    }

    return maxSum
}

console.log(maxSatisfaction([2, 3, 4]), 20, "early return this")
// console.log(maxSatisfaction([-5,-4,-2]), 0, "all negative numbers")

// console.log(maxSatisfaction([2, 3, 4]), 20, "early return this")
// console.log(maxSatisfaction([0, 2, 3, 4]), 29, "0x1 + 2x2 + 3x3 + 4x4 = (16 + 4  + 2) = 29, start from (Nx1) every time")

// console.log(maxSatisfaction([-8, -2, 2, 5]),   17, "-2x1 + 2x2 + 5x3 = (-2 + 4 + 15) = 17")
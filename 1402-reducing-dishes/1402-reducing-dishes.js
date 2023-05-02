var maxSatisfaction = function (array) {

    let maxSum = 0
    array.sort((a, b) => a - b)
    
    const arrayHasPositives = array.find(num => num >=1) ?? false
    
    if (!arrayHasPositives) {
        return 0
    }
    
    for (let index = 0; index < array.length; index++) {

        // reset
        let currSumOfProducts = 0
        
        // [2, 3, 4]
        // [3, 4]
        // [4]
        
        let index2 = index
        
        // for (let index2 = index; index2 < array.length; index2++) {
        
        while (index2 < array.length) {
            
            array
            
            const currNum = array[index2]
            let multiplierThatStartsFrom1 = (index2 - index) + 1
            
            const currProduct = currNum * multiplierThatStartsFrom1
            currSumOfProducts += currProduct

            index2++
        }

        currSumOfProducts
        maxSum
        
        maxSum = Math.max(currSumOfProducts, maxSum)
        
        if (array.at(0) >= 0) {
            return maxSum
        }
            
    }

    return maxSum
}

console.log(maxSatisfaction([2, 3, 4]), 20, "early return this")
// console.log(maxSatisfaction([-5,-4,-2]), 0, "all negative numbers")

// console.log(maxSatisfaction([2, 3, 4]), 20, "early return this")
// console.log(maxSatisfaction([0, 2, 3, 4]), 29, "0x1 + 2x2 + 3x3 + 4x4 = (16 + 4  + 2) = 29, start from (Nx1) every time")

// console.log(maxSatisfaction([-8, -2, 2, 5]),   17, "-2x1 + 2x2 + 5x3 = (-2 + 4 + 15) = 17")
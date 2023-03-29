var maxSatisfaction = function (array) {

    let maxNum = 0

    // let term2 = 0
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
            let term2 = (index2 - index) + 1
            const currProduct = currNum * term2

            currSumOfProducts += currProduct
        }

        currSumOfProducts
        maxNum

        if (currSumOfProducts > maxNum) {
            maxNum = currSumOfProducts

            if (array[0] >= 0){
                return maxNum
            }

        }        
    }

    return maxNum
}

// console.log(maxSatisfaction([2, 3, 4]), 20)
console.log(maxSatisfaction([0, 2, 3, 4]), 29, "0x1 + 2x2 + 3x3 + 4x4 = (16 + 4  + 2) = 29")

// console.log(maxSatisfaction( [-1,-8,0,5,-9]))
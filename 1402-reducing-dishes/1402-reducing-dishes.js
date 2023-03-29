var maxSatisfaction = function (array) {

    array.sort((a, b) => a - b)

    let maxNum = 0

    let find = array.find(e => e<=-1)

    array

    if (find == undefined){

        let index = 0

        while (index < array.length){
            array[index] = (array[index] * (index + 1))
            index++
        }

        array
        return array.reduce((s,c)=>s+c,0)
    }
    

    for (let index = 0; index < array.length; index++) {

        array
        let currSumOfProducts = 0

        index


        for (let index2 = index; index2 < array.length; index2++) {
        
            array

            const currNum = array[index2]
    
            let term2 = (index2 - index) + 1

            // [2, 3, 4]
            // [3, 4]
            // [4]

            const currProduct = currNum * term2
            currSumOfProducts += (currProduct)
        }

        currSumOfProducts

        if (currSumOfProducts > maxNum) {
            maxNum = currSumOfProducts
        }
    }

    return maxNum
}

// console.log(maxSatisfaction([2, 3, 4]), 20)
console.log(maxSatisfaction([4, 3, 2, 0]), 29, "0x1 + 2x2 + 3x3 + 4x4 = (16 + 4  + 2) = 29")

// console.log(maxSatisfaction( [-1,-8,0,5,-9]))
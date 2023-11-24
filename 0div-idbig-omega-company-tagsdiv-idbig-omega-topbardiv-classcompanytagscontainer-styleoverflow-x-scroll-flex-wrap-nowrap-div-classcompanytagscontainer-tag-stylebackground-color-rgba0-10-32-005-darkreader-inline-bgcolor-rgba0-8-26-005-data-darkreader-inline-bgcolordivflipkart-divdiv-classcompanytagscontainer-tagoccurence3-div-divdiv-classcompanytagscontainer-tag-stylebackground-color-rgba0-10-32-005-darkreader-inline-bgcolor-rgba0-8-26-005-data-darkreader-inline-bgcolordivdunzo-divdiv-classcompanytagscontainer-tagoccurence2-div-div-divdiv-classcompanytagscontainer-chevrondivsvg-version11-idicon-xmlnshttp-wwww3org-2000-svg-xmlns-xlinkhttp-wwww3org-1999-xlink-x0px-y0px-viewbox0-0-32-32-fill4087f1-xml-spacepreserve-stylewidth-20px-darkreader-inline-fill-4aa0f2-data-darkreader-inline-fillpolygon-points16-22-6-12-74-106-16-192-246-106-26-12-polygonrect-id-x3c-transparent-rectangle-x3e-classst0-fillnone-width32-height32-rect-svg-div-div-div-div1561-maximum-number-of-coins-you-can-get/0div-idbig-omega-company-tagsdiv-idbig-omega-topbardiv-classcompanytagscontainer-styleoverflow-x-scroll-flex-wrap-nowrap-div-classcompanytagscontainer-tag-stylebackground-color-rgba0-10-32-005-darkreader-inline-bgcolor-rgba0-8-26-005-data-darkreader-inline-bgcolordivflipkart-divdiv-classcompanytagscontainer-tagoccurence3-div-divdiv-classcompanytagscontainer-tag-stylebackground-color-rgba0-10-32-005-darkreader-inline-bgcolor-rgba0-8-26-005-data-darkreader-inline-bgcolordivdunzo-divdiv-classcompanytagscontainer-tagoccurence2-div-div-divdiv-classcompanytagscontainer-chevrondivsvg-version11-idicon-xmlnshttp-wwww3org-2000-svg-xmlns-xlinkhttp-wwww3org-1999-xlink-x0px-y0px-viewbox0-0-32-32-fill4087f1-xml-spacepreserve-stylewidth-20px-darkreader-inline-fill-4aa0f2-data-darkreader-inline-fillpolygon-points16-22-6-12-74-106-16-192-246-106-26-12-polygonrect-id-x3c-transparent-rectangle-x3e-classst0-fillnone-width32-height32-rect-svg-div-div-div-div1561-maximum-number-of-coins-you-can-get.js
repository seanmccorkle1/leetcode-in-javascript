var maxCoins = function (array) {

    let maxCoins = 0

    array.sort((a, b) => a - b)

    let index = array.length / 3

    while (index < array.length){

        maxCoins += array[index]
        index += 2
    }
    
    return maxCoins
}

console.log(maxCoins([2, 4, 1, 2, 7, 8]), 9, "[1, 2, 2, 4, 7, 8] go from the third 2 to 7, (2 + 7 = 11), length is 6, 2 groups")

// console.log(maxCoins([5, 8, 8, 5, 10, 7, 8, 8, 5, 10, 7, 12]), 33) // console.log(maxCoins([2, 4, 5]), 4, "4 is the second greatest of the pile (2, 4, 5)")
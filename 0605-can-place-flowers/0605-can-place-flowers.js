var canPlaceFlowers = function (array, numOfFlowersToPlace) {

    let flowerCount = 0


    for (let index = 0; index < array.length; index++) {

        if (flowerCount >=numOfFlowersToPlace){
            return true
        }

        const numToTheRight = array[index + 1]
        const numToTheLeft = array[index - 1]

        const emptySpotFound = array[index] == 0
        const numIsAtTheFront = index==0 ? true : false

        if (emptySpotFound) {

            if (numToTheLeft == 0 && numToTheRight == 0) {
                array[index] = 1 //plant
                flowerCount++
            }

            else if (numIsAtTheFront && numToTheRight == 0) {
                array[index] = 1
                flowerCount++
            }

            // for one-length arrays like [0]
            // it only gets here with emptySpotFound

            else if (numIsAtTheFront && array.length == 1) {
                array[index] = 1
                flowerCount++
            }

            else if (index == array.length - 1) {

                if (numToTheLeft == 0) {
                    array[index] = 1
                    flowerCount++
                }
            }
        }

    }

    flowerCount
    numOfFlowersToPlace

    array

    if (flowerCount > numOfFlowersToPlace || flowerCount == numOfFlowersToPlace) {
        return true
    } 
    
    else if (flowerCount < numOfFlowersToPlace) {
        return false
    }
}

console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2), true, [1, 0, [1], 0, [1]], "the new 1's are the 2 flowers")

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 20), false, "cant plant")

// console.log(canPlaceFlowers([1,0,0,0,1], 1), true,"1 flower can be planted in the middle")

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2), false, "2 flowers cannot be planted")
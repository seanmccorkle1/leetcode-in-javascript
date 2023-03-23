var canPlaceFlowers = function (array, numOfFlowersToPlace) {
    
    if (numOfFlowersToPlace==0){
        return true
    }

    let flowerCount = 0


    for (let index = 0; index < array.length; index++) {



        const numToTheRight = array[index + 1]
        const numToTheLeft = array[index - 1]


        const emptySpotFound = array[index] == 0
        const numIsAtTheFront = index==0 ? true : false


        if (emptySpotFound) {

            if (numToTheLeft == 0 && numToTheRight == 0) {
                array[index] = 1 //plant
                flowerCount++
            }

            // currNum is 0 in all of these
            else if (numIsAtTheFront && numToTheRight == 0) {
                array[index] = 1
                flowerCount++
            }

            // for one-length arrays like [0]
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

        // not needed, but conditions that you want to check on every loop
        // should be at the bottom

        // one-time conditions should be at the top

        if (flowerCount == numOfFlowersToPlace){
            return true
        }

    }

    flowerCount
    numOfFlowersToPlace

    array

    if (flowerCount > numOfFlowersToPlace || flowerCount == numOfFlowersToPlace) {
        return true
    }    

    // if flowerCount is less than targetCount    

    else {
        return false
    }

}


console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2),  true,  [1, 0, [1], 0, [1]], "the new 1's are the 2 flowers")
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 3), false, "3 new flowers cannot be planted here")
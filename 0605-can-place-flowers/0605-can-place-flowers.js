var canPlaceFlowers = function (array, numOfFlowersToPlace) {
    
    let flowerCount = 0
    
    for (let index = 0; index < array.length; index++) {
        
        const numToTheRight = array[index + 1]
        const numToTheLeft = array[index - 1]
        
        const emptySpotFound = array[index] == 0 ?true:false
        const numIsAtTheFront = index==0 ? true : false
        
        if (emptySpotFound) {
            if (numToTheLeft === 0 && numToTheRight ===0) {
                array[index] = 1 // plant the flower
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
            
            else if (index == array.length - 1 && numToTheLeft == 0) {
                array[index] = 1
                flowerCount++
            }
        }
        
    }
    
    flowerCount
    numOfFlowersToPlace
    
    array
    
    if (flowerCount > numOfFlowersToPlace || flowerCount == numOfFlowersToPlace) {
        return true
    }    
    
    return false    
}

console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2),  true,  [1, 0, [1], 0, [1]], "the new 1's are the 2 flowers")
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 3), false, "3 new flowers cannot be planted here")
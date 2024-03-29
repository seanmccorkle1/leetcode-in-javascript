var canPlaceFlowers = function (array, numOfFlowersToPlace) {
    
    // you can always place 0 flowers

    if (numOfFlowersToPlace == 0){
        return true 
    }
    
    let flowerCount = 0
    
    for (let index = 0; index < array.length; index++) {
        
        const numToTheLeft = array[index - 1]
        const numToTheRight = array[index + 1]
        
        const indexIsAtTheFirst = index==0 
        const indexIsAtTheLast = index == array.length - 1
        const emptySpotFound = array[index] == 0
        
        if (emptySpotFound) {            
            
            if (numToTheLeft === 0 && numToTheRight ===0) {
                array[index] = 1 // plant the flower
                flowerCount++
            }
            // currNum is 0 in all of these

            else if (indexIsAtTheFirst && numToTheRight == 0) {
                array[index] = 1
                flowerCount++
            }
            
            // for one-length arrays like [0]

            else if (indexIsAtTheFirst && array.length == 1) {
                array[index] = 1
                flowerCount++
            }
            
            else if (indexIsAtTheLast && numToTheLeft == 0) {
                array[index] = 1
                flowerCount++
            }
        }
        
        if (flowerCount == numOfFlowersToPlace){
            return true
        }
    }
    
    return false    
}

console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2),  true,  [1, 0, [1], 0, [1]], "the new 1's are the 2 flowers")
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 3), false, "3 new flowers cannot be planted here")
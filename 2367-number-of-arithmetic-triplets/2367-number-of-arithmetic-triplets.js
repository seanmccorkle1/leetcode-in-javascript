var arithmeticTriplets = function(array, targetDifference) {
    
    const indexTriplets = []
    const triplets = []
    
    let tripletCount = 0
    
    // you have 1 (num) and 3 (difference), 
    // if the array has (1 + 3) and (1 + (3 x 2)), then its a triplet

    for (let firstNum of array){

        let secondNum = firstNum + targetDifference
        let thirdNum = firstNum + (targetDifference * 2)
        
        // triplets all follow this pattern
        const tripletFound = array.includes(secondNum) && array.includes(thirdNum) 
        
        if (tripletFound) {
            tripletCount++
            
            let indexSubarray = [array.indexOf(firstNum), array.indexOf(secondNum), array.indexOf(thirdNum)]
            
            let numSubarray = [firstNum,secondNum,thirdNum]
            
            indexTriplets.push(indexSubarray)
            triplets.push(numSubarray)
        }
    }
    triplets
    indexTriplets
    
    return tripletCount
}

console.log(arithmeticTriplets([0,1,4,6,7,10], 3), 2, "(1,2,4) and (2, 4, 5) are the two triplets")

// console.log(arithmeticTriplets([0, 1, 2], 1), 1, "just 1 triplet, [2-1 = 1, 1-0= 1, two differences to get a triplet")

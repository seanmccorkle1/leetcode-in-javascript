var arithmeticTriplets = function(array, targetDifference) {


    const indexTriplets = []
    const triplets = []


    let tripletCount = 0



    for (let firstNum of array){


        // you have 1 (num) and 3 (difference), 
        // if the array has (1 + 3) and (1 + (3 x 2)), then its a triplet


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


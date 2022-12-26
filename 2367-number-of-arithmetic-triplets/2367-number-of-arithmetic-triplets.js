var arithmeticTriplets = function(array, targetDifference) {

    const tripletArray = []
    
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

            let subarray = [array.indexOf(firstNum), array.indexOf(secondNum), array.indexOf(thirdNum)]
            tripletArray.push(subarray)
        }
    }


    return tripletCount
}


console.log(arithmeticTriplets([0,1,4,6,7,10], 3), 2, "(1,2,4) and (2, 4, 5) are the two triplets")
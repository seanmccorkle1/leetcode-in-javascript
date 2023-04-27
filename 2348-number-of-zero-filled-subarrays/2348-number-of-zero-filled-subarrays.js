var zeroFilledSubarray = function(array) {
    
    let numOfZeroSubarrays = 0
    let consecutiveCount = 0
    
    for (let index = 0; index < array.length; index++) {
        
        const currNum = array[index]
        
        if (currNum == 0) {
            consecutiveCount += 1
            numOfZeroSubarrays += consecutiveCount
            
        }
            else if (currNum != 0){
            consecutiveCount = 0 // reset
        }
    }
    
    console.log(consecutiveCount)
    return numOfZeroSubarrays
}

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4]),  6, "[0], [0], [0], [0], [0, 0], [0, 0]")
// console.log(zeroFilledSubarray([0,0,0,2,0,0]), 9)
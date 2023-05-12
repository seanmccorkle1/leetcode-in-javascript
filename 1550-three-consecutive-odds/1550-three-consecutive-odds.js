var threeConsecutiveOdds = function(inputArray) {

    // dont even have to do array.filter
    if (inputArray.length <= 2){
        return false
    }
    
    const oddNums = inputArray.filter(num => num%2==1)
    
    if (oddNums.length <= 2) {
        return false
    }
    
    for (let index = 2; index < inputArray.length; index++) {
        
        const threeOdds=
              (inputArray[index] % 2 == 1) && 
              (inputArray[index - 1] % 2 == 1) && 
              (inputArray[index - 2] % 2 == 1)  ? true : false
        
        if (threeOdds) {
            return true
        }        
    }
    
    return false
}

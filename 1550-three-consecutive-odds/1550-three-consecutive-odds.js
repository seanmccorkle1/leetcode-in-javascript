
var threeConsecutiveOdds = function(inputArray) {
    
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

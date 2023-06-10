var increasingTriplet = function(nums) {
    
    let firstNumber = Infinity;
    let secondNumber = Infinity
    
    for (let currentNumber of nums) {
        
        if (currentNumber > firstNumber && currentNumber > secondNumber) {
            return true
        }
        
        else if (currentNumber > firstNumber) {
            secondNumber = currentNumber;
        }
        
        else if (currentNumber <= firstNumber) {
            firstNumber = currentNumber;
        }
        
    }
    return false
}


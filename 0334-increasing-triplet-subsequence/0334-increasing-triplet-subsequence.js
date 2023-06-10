var increasingTriplet = function(nums) {
    
    let firstNumber = Infinity;
    let secondNumber = Infinity
    
    for (let currentNumber of nums) {
        if (currentNumber > secondNumber && currentNumber > firstNumber) {
            return true;
        }
        if (currentNumber <= firstNumber) {
            firstNumber = currentNumber;
        }
        
        else if (currentNumber > firstNumber) {
            secondNumber = currentNumber;
        }
    }
    return false
}


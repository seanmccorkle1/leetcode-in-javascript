var minPartitions = function(stringnum) {
    
    const digitArray = stringnum.split("")
    
    // Math coerces it to a number
    let highestDigit = Math.max(...digitArray)    
    return highestDigit
}

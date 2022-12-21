/*

*/

var isPowerOfThree = function(num) {
    
    num

    // Math.log(0) returns -Infinity
    if (num <= 0){
        return false
    }
    
    const power = Math.log(num) / Math.log(3)

    let smallRange  = Math.abs(power  - Math.round(power))

    if (smallRange < 1e-10){
        return true
    }

    else if (smallRange > 1e-10) {
        return false
    }

    return false
    // return Math.abs(longDecimal - Math.round(longDecimal)) < 1e-10
}

// console.log(isPowerOfThree(27), true, "3 ^ 3 = 27")
// console.log(isPowerOfThree(6), false, "6 isnt a power of 3")
// console.log(isPowerOfThree(27))
// console.log(isPowerOfThree(59049))
// isPowerOfThree(19682)
// isPowerOfThree(19683)
isPowerOfThree(0)
isPowerOfThree(-1)
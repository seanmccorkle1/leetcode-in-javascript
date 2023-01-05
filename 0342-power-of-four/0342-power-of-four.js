/**
 * Next questions:
 * 
 * Product of Array Except Self
 * Encode And Decode Strings \U0001f512	
 * Longest Consecutive Sequence	
 *
 * 
 * @function evaluateRPN
 * @return { "cec" }
 *
 * @explain { "cec" is a longer palinxdrome then "ra". }
 *
 */


var isPowerOfFour = function (num) {
    
    if (num == 4){
        return true
    }
    let twoLogExponent = Math.log2(num)
    const exponentIsEven = (twoLogExponent % 2) == 0
    
    if (exponentIsEven) {
        return true
    }
    
    else return false
}

// console.log(pow4(16), true, "power of 4")
// console.log(pow4(64), true)

// console.log(pow4(8), false, "power of 2 but not a power of 4.")
// console.log(pow4(5), false, "not a power of either")
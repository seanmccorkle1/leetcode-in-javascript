var isPowerOfTwo = function(num) {
    
    if (num <=0) {
        return false
    } 
    
    num
    num - 1
    
    let bitwise = (num) & (num - 1) 
    
    // if it was the one condition where all bits evaluate to 0 
    
    if (bitwise == 0) {
        return true
    }
    
    return false
}

console.log(isPowerOfTwo(32), true, "2 ^ 5 = 32")
// console.log(isPowerOfTwo(20), false, “[1, 2, 4, 8, 16, 32], 20 is not a power”)
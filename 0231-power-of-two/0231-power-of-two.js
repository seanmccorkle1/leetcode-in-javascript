var isPowerOfTwo = function(num) {
    
    if (num <=0) {
        return false
    }
    
    num
    num - 1

    let bitwise = (num) & (num - 1) 
    
        if (bitwise === 0) {
            return true
        }
    
        else if (bitwise !== 0) {
            return false
        }
    }

console.log(isPowerOfTwo(32), true, "2 ^ 5 = 32")
// console.log(isPowerOfTwo(20), false, “[1, 2, 4, 8, 16, 32], 20 is not a power”)
var isPowerOfFour = function (num) {

//     if (num == 4){
//         return true
//     }
    
    let twoLogExponent = Math.log2(num)
    const exponentIsEven = (twoLogExponent % 2) == 0
    
    if (exponentIsEven) {
        return true
    }
    
    else return false
}

console.log(isPowerOfFour(16), true, "power of 4")
// console.log(isPowerOfFour(64), true)

// console.log(isPowerOfFour(8), false, "power of 2 but not a power of 4.")
// console.log(isPowerOfFour(5), false, "not a power of either")
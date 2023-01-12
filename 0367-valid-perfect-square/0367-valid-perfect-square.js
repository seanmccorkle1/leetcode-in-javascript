/**
 * 
 * @function
 * @return
 * 
 */


var isPerfectSquare = function(num){
    num
    
    const multiple = Math.pow(num, 0.5)

    if (Number.isInteger(multiple)){
        return true
    }
    else return false
}

console.log(isPerfectSquare(15), false)
console.log(isPerfectSquare(16), true)
// console.log(isPerfectSquare(17), false)
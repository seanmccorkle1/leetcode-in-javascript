
var mySqrt = function(num) {

    let val = 0
    
    while(Math.pow(val, 2) <= num) {
        val+=1
    }
    
    return val - 1
}

console.log(mySqrt(8), 2, "the square root is 2.8, truncate it to 2")
console.log(mySqrt(0), 0)
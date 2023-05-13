var mySqrt = function(num) {
    
    let base = 0
    
    while (Math.pow(base, 2) <= num){
        base++
    }
    return base - 1
}

console.log(mySqrt(8), 2, "the square root of 8 is 2.8, truncate it to 2")
// console.log(mySqrt(0), 0)
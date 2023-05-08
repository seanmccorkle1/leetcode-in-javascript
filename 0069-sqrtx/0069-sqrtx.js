
var mySqrt = function(num) {
    if (num == 0){
        return 0
    }
    let increment = 1
    
    while(Math.pow(increment, 2) <= num) {
        increment += 1
    }
    
    return increment - 1
}

console.log(mySqrt(8), 2, "the square root is 2.8, truncate it to 2")
console.log(mySqrt(0), 0)
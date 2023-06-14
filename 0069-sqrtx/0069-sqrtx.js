
var mySqrt = function (num) {

    let base = 1

    while (Math.pow(base, 2) <= num){
        base += 1
    }
    
    base -=1
    return base
}

console.log(mySqrt(8), 2, "the square root is 2.8, truncate it to 2")
// console.log(mySqrt(0), 0)
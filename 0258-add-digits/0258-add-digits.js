
var addDigits = function (num) {
    
    if (isNaN(num) || num == 0 || num == null) {
        return 0
    }
    
    if (num <= 9) {
        return num
    }  

    num
    
    // this is called a "digital root"
    const isDivisibleBy9 =(num % 9) == 0
    
    // 27 -> 2 + 7 = 9
    // return 9

    // 36 -> 3 + 6 = 9
    // return 9 

    if (isDivisibleBy9) {
        return 9
    }
    
    else if (!isDivisibleBy9) {
        let remainderOn9 = num % 9
        return remainderOn9
    }
    
}

console.log(addDigits(38), 2, "38 is (3 + 8) = 11 -> 11 is (1 + 1) = 2, result is 2")

// console.log(addDigits(32), 5, "32 is (3 + 2) = 5, return 5")

// console.log(addDigits(0), 0)
// console.log(addDigits(6), 6)
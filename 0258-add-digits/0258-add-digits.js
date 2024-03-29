var addDigits = function (num) {
    
    num
    
    // 27 -> 2 + 7 = 9
    // return 9

    // 36 -> 3 + 6 = 9
    // return 9 
    
    // 0 is an integer, so addDigits(0) returns 9 without this
    
    if (num==0){
        return 0
    }
    
    const isDivisibleBy9 = Number.isInteger(num /9)
    
    if (isDivisibleBy9) {
        return 9 
    }
    
    else if (!isDivisibleBy9) {
        let remainderBelow9= num % 9
        return remainderBelow9
    }
}

console.log(addDigits(28), 1, "28 -> 10 -> 1")
// console.log(addDigits(27), 9, "2+7=9")
// console.log(addDigits(26), 8)
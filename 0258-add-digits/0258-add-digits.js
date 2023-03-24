
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
        return 9 //otherwise (num % 9) would be 0
    }
    
    else if (!isDivisibleBy9) {
        let remainderOn9 = num % 9
        return remainderOn9
    }
    
}

console.log(addDigits(28), 1, "28 -> 10 -> 1")
console.log(addDigits(27), 9, "2+7=9")
console.log(addDigits(26), 8)
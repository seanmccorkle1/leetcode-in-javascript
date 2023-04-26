var addDigits = function (num) {
    
    if (num==0){
        return 0
    }
    
    num
    
    // called a digital root
    
    // 27 -> 2 + 7 = 9
    // return 9

    // 36 -> 3 + 6 = 9
    // return 9 
    
    // const isDivisibleBy9 =(num % 9) == 0
    const isDivisibleBy9 = Number.isInteger(num /9)
    
    //otherwise (num % 9) would be 0
    
    if (isDivisibleBy9) {
        return 9 
    }
    
    else if (!isDivisibleBy9) {
        let remainderOn9 = num % 9
        return remainderOn9
    }
}

console.log(addDigits(28), 1, "28 -> 10 -> 1")
// console.log(addDigits(27), 9, "2+7=9")
// console.log(addDigits(26), 8)
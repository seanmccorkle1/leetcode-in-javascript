var addStrings = function (stringnum1, stringnum2) {

    // let index = num1.length - 1
    // let index2 = num2.length - 1

    // let carry = 0
    let stringSum = ""

    stringnum1
    stringnum2

    // start at the ones place
    let stringnum1BackIndex = stringnum1.length - 1
    let stringnum2BackIndex = stringnum2.length - 1

    let carry = 0
    
    // keep the loop going as long as one of these is true
    
    while (carry >= 1 || stringnum1BackIndex >= 0 || stringnum2BackIndex >= 0) {
        
        let digit1 = stringnum1[stringnum1BackIndex] ?? 0    
        digit1=Number(digit1)
        
        let digit2 = stringnum2[stringnum2BackIndex] ?? 0
        digit2 = Number(digit2)
        
        digit1
        digit2
        carry

        let currDigitSum = digit1 + digit2 + carry
        carry = Math.floor(currDigitSum / 10)

        currDigitSum

        // only if the sum for these two digits is  >= 10



        // "6" + "" ("6")  then "4" + "6" (46) as a string (``)
        // carry doesnt go in result

        currDigitSum

        if (currDigitSum >= 10) {
            currDigitSum = currDigitSum % 10
        }

        // the old stringSum goes to the back, 
        // the new twoDigitSum is more to the left on the indexes 
        // and thus more to the left on here

        // newDigit ="8", stringSum = "000" 
        // would be "8000"

        let newDigit = currDigitSum
        stringSum

        stringSum = `${newDigit}${stringSum}`
    
        stringSum

        stringnum1BackIndex--
        stringnum2BackIndex--
    }

    return stringSum
}

console.log(addStrings("8", "7"), "15")

// console.log(addStrings("18", "18"), "36")

// console.log(addStrings("180", "181"), "36")
// console.log(addStrings("32",  "32"), "64")
var addStrings = function (stringnum1, stringnum2) {

    // let index = num1.length - 1
    // let index2 = num2.length - 1

    let carry = 0
    let stringSum = ""


    stringnum1
    stringnum2

    // one of the numbers could be bigger eg. xd("313", "21")
    // second part of a for loop is always a condition    
    //  need carry > 0 for 8 + 7

    // start at the ones place
    let stringnum1BackIndex = stringnum1.length - 1
    let stringnum2BackIndex = stringnum2.length - 1

    // while (stringnum1BackIndex >= 0 || stringnum2BackIndex >= 0 || carry >= 1) {

    // for (let index = stringnum1.length - 1, index2 = stringnum2.length - 1; index >= 0 || index2 >= 0 || carry > 0; index--, index2--) {

    while (stringnum1BackIndex >= 0 || stringnum2BackIndex >= 0 || carry > 0) {

        stringnum1

        let digit1 = (Number(stringnum1[stringnum1BackIndex]))
        digit1

        if (!digit1) {
            digit1 = 0
        }

        stringnum2

        let digit2 = Number(stringnum2[stringnum2BackIndex])

        if (!digit2) {
            digit2 = 0
        }

        digit1
        digit2
        carry

        let currDigitSum = digit1 + digit2 + carry

        currDigitSum

        // only if the sum for these two digits is  >= 10

        carry =
            Math.floor(
                currDigitSum / 10)


        // "6" + "" ("6")  then "4" + "6" (46) as a string (``)
        // carry doesnt go in result

        currDigitSum

        if (currDigitSum >= 10) {
            currDigitSum = currDigitSum % 10
        }

        // the old stringSum goes to the back, 
        // the new twoDigitSum is more to the left on the indexes 
        // and thus more to the left on here

        currDigitSum
        stringSum

        let newDigit = currDigitSum

        // newDigit ="8", stringSum = "000" 
        // would be "8000"

        stringSum = `${newDigit}${stringSum}`
        
        stringnum1BackIndex--
        stringnum2BackIndex--
    }

    return stringSum
}

// console.log(addStrings("18", "18"), "36")

console.log(addStrings("180", "181"), "36")
// console.log(addStrings("32",  "32"), "64")
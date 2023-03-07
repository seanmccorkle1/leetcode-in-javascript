var titleToNumber = function (columnString) {

    let sum = 0

    // "Z".charCodeAt() - 64 == 26
    // 64 is the magic number

    const offset = "A".charCodeAt() - 1

    // the first letter is the greatest, 
    // same as the first number being greatest 
    // and last number (ones) being least in normal numbers

    // start from the highest exponent for the first letter

    columnString

    // longer string length increases the total value exponentially
    let exponent = columnString.length - 1

    let index=  0

    while (exponent >= 0){
        
    
    // for (let index = 0; exponent >= 0; index++) {

        const letter = columnString[index]
        const letterValue = letter.charCodeAt() - offset

        // youre looking at ONE letter at a time, 
        // update sum once per loop, once per letter

        // "AA" , the first A is 26

        // only put "26" in the base of the Math.pow()
        // multiply to get numbers like 52 and 78 after

        // 100s place = (letterValue x 676)
        // 10s place = (letterValue x 26)
        //  1s place = (letterValue x 1)

        letter
        letterValue
        exponent

        // [676, 26, 1]

        
        let placeMultiplier = Math.pow(26, exponent)
        const totalValue = letterValue * placeMultiplier

        sum += totalValue
        exponent -= 1
        index++
    }

    return sum
}


console.log(
    titleToNumber("BC"), 55, `
    B = 2, C = 3
    B = (2 x 26), C = 3
    B = 52, C  = 3
    "BC" = 52 + 3
    Result is 55`)


// console.log(titleToNumber("A"), 1)
// console.log(titleToNumber("AA"), 27, "first A is 26 and second A is 1")
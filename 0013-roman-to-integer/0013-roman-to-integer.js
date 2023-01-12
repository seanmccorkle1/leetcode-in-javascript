/**
 Many question are incorrectly labeled, but i think less than 10 minutes for easy, 20 minutes for medium, and 40 minutes for hard problems is a good strategy. How many depends on your schedule, but i think the num isn't really important. Learning from the question you've solved is more important.
* 
*/

var romanToInt = function(string){

    let sum = 0

    const letterObj = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    }

    // for (let index = 0; index < string.length; index++){

    for (let index = 0; index < string.length - 1; index++){

        let currLetterValue = letterObj[string[index]]
        let rightLetterValue = letterObj[string[index + 1]]

        // "IX" is (-1 + 10 = 9)

        if (currLetterValue < rightLetterValue){
            sum -= currLetterValue
        }

        // always add the last letter normally

        else if (currLetterValue >= rightLetterValue){
            sum += currLetterValue
        }

    }
    let lastLetter = string.at(-1)
    sum += letterObj[lastLetter]

    return sum
}

console.log(romanToInt("LVIII"), 58, "50 + 5 + 1 + 1 + 1 = 58")
// console.log(romanToInt("MCMXCIV"), 1994)
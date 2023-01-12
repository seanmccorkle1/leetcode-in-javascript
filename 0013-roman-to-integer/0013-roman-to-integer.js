



var romanToInt = function (string) {

    let sum = 0

    const letterObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let index = 0; index < string.length - 1; index++) {

        let leftLetterValue = letterObj[string[index]]
        let rightLetterValue = letterObj[string[index + 1]]

        // "IX" is (-1 + 10 = 9)

        if (leftLetterValue < rightLetterValue) {
            sum -= leftLetterValue
        }
        
        // always add the last letter normally
        else if (leftLetterValue >= rightLetterValue) {
            sum += leftLetterValue
        }

    }

    let lastLetter = string.at(-1)
    sum += letterObj[lastLetter]
    return sum
}

// console.log(romanToInt("LVIII"), 58, "50 + 5 + 1 + 1 + 1 = 58")
console.log(romanToInt("CMLI"), 951)
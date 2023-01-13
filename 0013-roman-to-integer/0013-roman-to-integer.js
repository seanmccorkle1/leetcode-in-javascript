var romanToInt = function (string) {
    const letterObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum = 0

    for (let index = 0; index < string.length; index++) {
        let currLetter = string[index]
        let rightLetter=string[index + 1]

        const currValue = letterObj[currLetter]
        const rightValue = letterObj[rightLetter]        

        if (currValue < rightValue) {
            sum -= currValue
        }

        else  sum += currValue
    }
    return sum
}

// console.log(romanToInt("LVIII"), 58, "50 + 5 + 1 + 1 + 1 = 58")
console.log(romanToInt("CMLI"), 951)
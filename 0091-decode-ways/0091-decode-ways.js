// e.g. '110'

// array = 
// [1, 1, 0, 0]
// [1, 1, 2, 0]
// [1, 1, 2, 1]

var numDecodings = function (stringnum) {

    if (stringnum[0] == '0') {
        return 0
    }
    
    // its not a direct "map" like the spells and potions problem,
    // also its a DP problem that uses array.at(-1) at the end
    // which is why its length + 1    
    
    const array = new Array(stringnum.length + 1).fill(0)
    
    // "A is the lowest unit and starts at 1, 0 isnt valid"    
    array[0] = 1
    array[1] = 1
    
    // index IS slice's endIndex, so using < would mean the last letter gets cut off
    // always start this index at lastInitIndex + 1
    
    for (let index = 2; index <= stringnum.length; index++) {
        
        let singleDigitNum = Number(stringnum.slice(index - 1, index))

        // A is the lowest and starts at 1, 0 isnt valid
        
        if (singleDigitNum != 0) {
            array[index] += array[index - 1]
        }
        
        let twoDigitNum = Number(stringnum.slice(index - 2, index))
                               
        if (twoDigitNum >= 10 && twoDigitNum <= 26) {
            array[index] += array[index - 2]
        }
    }
    
    console.log(array)
    
    let numOfWaysToRepresentNumAsLetters = array.at(-1)
    return numOfWaysToRepresentNumAsLetters
}

console.log(numDecodings("12"), 2, '"12" could be decoded as "AB" (1 2) or "L" (12)')

// console.log(numDecodings("110"), 1,"110 can only be represented as AK, A [1], K [10]")
// console.log(numDecodings("05"),  0, "starting with a 0 is invalid, ending with a 0 (eg. 20) is fine")
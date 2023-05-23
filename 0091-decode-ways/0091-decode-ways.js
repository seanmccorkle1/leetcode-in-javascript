var numDecodings = function (stringnum) {
    
    if (stringnum[0] === '0') {
        return 0
    }
    
    const array = new Array(stringnum.length + 1).fill(0)
    
    array[0] = 1
    array[1] = 1
    
    for (let index = 2; index <= stringnum.length; index++) {

        let singleDigit = Number(stringnum.slice(index - 1, index))

        if (singleDigit != 0) {
            array[index] += array[index - 1]
        }
        
        let twoDigits = Number(stringnum.slice(index - 2, index))

        if (twoDigits >= 10 && twoDigits <= 26) {
            array[index] += array[index - 2]
        }
    }

    console.log(array)
    return array.at(-1)
}

console.log(numDecodings("12"), 2, '"12" could be decoded as "AB" (1 2) or "L" (12)')

// console.log(numDecodings("05"),  0, "starting with a 0 is invalid, ending with a 0 (eg. 20) is fine")
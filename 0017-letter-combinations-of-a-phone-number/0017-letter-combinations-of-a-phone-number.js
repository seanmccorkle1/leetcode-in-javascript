var letterCombinations = function(digitString) {
    
    if (digitString == ""){ 
        return []
    }
    
    let array = []
    const obj = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }
    
    digitString
    digitString.length
    
    const fillArray = (inputString, index)  => {
        
        // early if statement in functions

        if (inputString.length === digitString.length){
            array.push(inputString)

            // break the fillArray() call before it gets to the end
            return 
        }

        let digit = Number(digitString[index])
        
        let threeLetters = obj[digit]

        for (const letter of threeLetters){
            fillArray(inputString + letter, index + 1)
        }
    }
    
    // fillArray(index, inputString), 
    // index 0 maps to string ""
    
    // use literals instead of variables in backtracking
    // dont use +=, either
    
    // this is the first base call 
    
    fillArray("", 0)
    
    array
    return array
}


console.log(letterCombinations("23"),  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
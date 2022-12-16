var letterCombinations = function(digitString) {
    
    if (digitString.length === 0) {
        return []
    }


    let array = []


    const obj = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' }


    digitString
    digitString.length



    const fillArrayFn = (index, inputString)  => {


        array


        if (inputString.length == digitString.length) {


            array
            array.push(inputString) 
          
            array


            // just need to push to the array
            // you dont have to return anything


            return 
        }


        index
        digitString


        digitString[0]
        digitString[1]


        obj[digitString[index]]


        let digit= digitString[index]
        let threeLetters = obj[digit]



        for (const letter of threeLetters) {
            inputString
            inputString + letter


            fillArrayFn(index + 1, inputString + letter)
        }


        array
    }
    
    
    // have to call the function outside the function itself for backtracking


    fillArrayFn(0, "") // (index, inputString), 0 maps to ''
    
    array
    return array
}


console.log(letterCombinations("23"),  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
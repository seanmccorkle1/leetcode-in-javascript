var countCharacters = function(stringArray, letterString) {
    // array to number  = array.reduce()    
    return stringArray.reduce((lengthSum, currentWord) => {

        const originalWord = currentWord


        // you have to update the variable itself with string.replace()
        // currString = currString.replace()

        for (const letter of [...letterString]) {
            letter
            currentWord = currentWord.replace(letter, "")
        }

        lengthSum
        currentWord        

        // with initialValue of 0, this is 0 + word.length (5)
        // both types are numbers

        if (currentWord.length == 0){
            return lengthSum + originalWord.length
        }

        else {
            return lengthSum + 0
        }
    }, 0)
}
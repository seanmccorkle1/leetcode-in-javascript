var longestCommonPrefix = function(strings) {

    // as soon as it doesnt equal return it to force the prefix
    const firstWord = strings[0]

    // keep the (index < variable.length) condition consistent 
    // with the (return {variable}) statement AFTER the loop

    // for each letter, loop through all the words in the array

    // check "f"  => "flower", "flow", "flight"
    // check "l"  => "flower", "flow", "flight"

    for (let letterIndex = 0; letterIndex < firstWord.length; letterIndex++) {

        letterIndex

        for (const currWord of strings) {

            currWord
            const currLetter = currWord[letterIndex]
            const letterInFirstWord = firstWord[letterIndex]

            // leave out the letter at the index cause it doesnt match

            if (currLetter != letterInFirstWord){
                return firstWord.slice(0, letterIndex)
            }
        }
    }

    // the longest prefix is just the whole word
    return firstWord
}

console.log(longestCommonPrefix(["flower","flow","flight"]), "fl")
console.log(longestCommonPrefix(["flower","flow","flight", "f"]),  "f")
console.log(longestCommonPrefix(["asd","xd"]), "")
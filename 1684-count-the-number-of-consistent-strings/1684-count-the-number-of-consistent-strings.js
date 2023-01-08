var countConsistentStrings = function(allowedLetters, stringArray){

    let count = 0
    const twoLetterRegex = new RegExp(`[${allowedLetters}]` , "g") 
    
    for (let word of stringArray) {
        word = word.replace(twoLetterRegex, "")

        if (word===""){
            count++
        }
    }    
    return count
}

console.log(countConsistentStrings("ab", ["xd", "aaaaa", "aaab", "baa"]), 3)
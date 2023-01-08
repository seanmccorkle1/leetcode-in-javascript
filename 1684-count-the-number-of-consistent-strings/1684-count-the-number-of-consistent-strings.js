var countConsistentStrings = function(allowedLetters, stringArray){

    let count = 0
    const r  = new RegExp(`[${allowedLetters}]` , "g") 

    
    for (let word of stringArray) {
        word = word.replace(r, "")
        if (word===""){
            count++
        }
            
    }
    
    return count
}

console.log(countConsistentStrings("ab", ["xd", "aaaaa", "aaab", "baa"]), 3)
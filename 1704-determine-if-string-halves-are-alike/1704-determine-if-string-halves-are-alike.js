var halvesAreAlike = function (string) {
    
    let count = 0
    let otherCount = 0
    
    let half = string.length / 2
    
    for (let index = 0; index < string.length; index++) {
        
        const letter = string[index]
        
        const vowelRegex = /[aeiou]/gi
        const letterIsAVowel = vowelRegex.test(letter) ? true : false
        
        if (index < half && letterIsAVowel) {
            count++
        }
        
        // without >= it would be false for both 2 < 2 and 2 > 2
        else if (index >= half && letterIsAVowel) {
            otherCount++
        }
        
    }
    
    count
    otherCount
    
    if (count==otherCount) {
        return true
    }
    
    return false
}

// console.log(xd("book"), true, "bo, ok, both have 1 vowel")
// console.log(xd("bookss"), "boo kss -> oo vs nothing")
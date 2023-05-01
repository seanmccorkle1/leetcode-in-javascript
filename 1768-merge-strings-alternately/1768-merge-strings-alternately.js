var mergeAlternately = function(word1, word2) {
    
    let mergedString = ""
    const lengthOfLongerString = Math.max(word1.length, word2.length)
    for (let index = 0; index < lengthOfLongerString; index++) {
            
            let word1Letter= (word1[index] ?? "")
            let word2Letter = word2[index] ?? ""
            
            const twoLetters = word1Letter + word2Letter
            mergedString += twoLetters    
        }
    
    return mergedString
}

console.log(mergeAlternately("leet", "code"), "lceoedte")
// console.log(mergeAlternately("leet", "co"), "lceoet")
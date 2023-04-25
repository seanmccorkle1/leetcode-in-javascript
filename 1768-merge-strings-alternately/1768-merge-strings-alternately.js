var mergeAlternately = (word1, word2) => {
    
        let mergedString = ""
        
        for (let index = 0; index < Math.max(word1.length, word2.length); index++) {
            
            let word1Letter= (word1[index] ?? "")
            let word2Letter = word2[index] ?? ""
            
            const twoLetters = word1Letter + word2Letter
            mergedString += twoLetters    
        }
    
    return mergedString
}

console.log(mergeAlternately("leet", "code"), "lceoedte")
// console.log(mergeAlternately("leet", "co"), "lceoet")
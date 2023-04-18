var mergeAlternately = (word1, word2) => {

        const maxLength = Math.max(word1.length,word2.length)
        
        let currString = ''
        
        for (let index = 0; index < maxLength; index++) {
            
            let word1Letter= word1[index] ?? ""
            let word2Letter = word2[index] ?? ""
            
            let twoLetters = word1Letter + word2Letter
            currString += twoLetters
            
            // string += word1Letter+word2Letter
            // result += (a[i] ?? '') + (b[i] ?? '')
    
  }
    
    return currString
}
console.log(mergeAlternately("leet", "code"))
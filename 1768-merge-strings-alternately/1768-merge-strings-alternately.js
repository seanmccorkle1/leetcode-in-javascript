var mergeAlternately = (word1, word2) => {
    
        let currString = ''

        
        for (let index = 0; index < Math.max(word1.length, word2.length); index++) {
            
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
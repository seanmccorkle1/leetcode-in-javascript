var mergeAlternately = (word1, word2) => {

        const maxLength = Math.max(word1.length,word2.length)
        let string = ''
        
        for (let index = 0; index < maxLength; index++) {
            
            let word1Letter= word1[index]
            let word2Letter = word2[index]
            
            if (word1Letter==undefined) {
                word1Letter = ""
            }
            if (word2Letter==undefined) {
                word2Letter = ""
            }

            let twoLetters = word1Letter + word2Letter
            string += twoLetters
            
            // string += word1Letter+word2Letter
            // result += (a[i] ?? '') + (b[i] ?? '')
    
  }
        
    return string
    
}
console.log(mergeAlternately("leet", "code"))
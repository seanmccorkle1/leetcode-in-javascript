const maxVowels = (string, k) => {
    
    let max = 0    

    const VOWEL = new Set(['a','e','i','o','u'])        
    
    for (let index = 0;  index < k; index++) {

        const letter=string[index]
        const letterIsVowel = VOWEL.has(letter)
        
        if (letterIsVowel) {
            max++
        }
        
  }
    
    string
    
    let cur = max
    
    for (let index = 0; index < string.length - k; index++) {    
        
        const letter = string[index]
        const rightLetter =string[index + k] 
        
        if (VOWEL.has(letter)) {
            cur--
        }
        
        if (VOWEL.has(rightLetter)) {
            cur++
        }
        
        
        max = Math.max(cur, max)
        if (cur== k){
            return cur
        }

    }
    
    return max
}

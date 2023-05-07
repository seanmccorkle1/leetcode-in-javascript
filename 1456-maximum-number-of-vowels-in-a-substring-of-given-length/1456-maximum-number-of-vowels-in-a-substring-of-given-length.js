var maxVowels = function(string, maxSubstringLength) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u']

    // the left edge of the window
    let start = 0
    
    // count of vowels for the current substring    
    let count = 0
    
    // return this
    let maxCount = 0
    
    // expanding the right edge of the window one character at a time
    
    for (let end = 0; end < string.length; end++) {
        
        const currLetter = string[end]
        
        if (vowels.includes(currLetter)) {
            count++
        }
        
        // if substring is longer than maxSubstringLength, let'string shrink the window by moving left edge
        
        if (end - start + 1 > maxSubstringLength) {
            
            // reduce the current count by one 
            // if the character on the left edge is vowe
            
            if (vowels.includes(string[start])) {
                count--
            }
            
            //shrinking the left edge of the window
            start++
        }
        
		// checking if current count is larger
        // than current maximum count
        
        maxCount = Math.max(count, maxCount)
        
        // if maxCount is equal to maxSubstringLength, no need to check further, it is the max possible count
        
        if (maxCount == maxSubstringLength) {
            return maxCount
        }
    }
    return maxCount
}
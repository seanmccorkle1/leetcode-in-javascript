var maxVowels = function(s, k) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u']

                    let maxCount = 0;
    let start = 0; // the left edge of the window
    let count = 0; // count of vowels for current substring
    
    // expanding the right edge of the window one character at a time

    for (let end = 0; end < s.length; end++) {
        
        if (vowels.includes(s[end])) {
            count++
        }
        
        // if substring is longer than K, let's shrink the window by moving left edge
        
        if (end - start + 1 > k) {
            
            // reduce the current count by one 
            // if the character on the left edge is vowe
            
            if (vowels.includes(s[start])) {
                count--
            }
            
            //shrinking the left edge of the window
            start++
        }
        
		// checking if current count is larger
        // than current maximum count
        
        maxCount = Math.max(count, maxCount)
        
        // if maxCount is equal to K, no need to check further, it is the max possible count
        
        if (maxCount == k) {
            return maxCount
        }
    }
    return maxCount
}
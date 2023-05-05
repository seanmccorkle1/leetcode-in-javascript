const maxVowels = (s, k) => {
    
    const VOWEL = new Set(['a','e','i','o','u']);

    let max = 0
    
    for (let i = 0; i < k; ++i) {
        
        if (VOWEL.has(s[i])){
            max++
        }
        
  }
    
    for (let i = 0, cur = max; i < s.length - k; i++) {    
        
        if (VOWEL.has(s[i])) {
            cur--
        }
        
        if (VOWEL.has(s[i + k])) {
            cur++
        }
        
        if (cur== k){
            return cur
        }
        max = Math.max(cur, max)
    }
    
    return max
}

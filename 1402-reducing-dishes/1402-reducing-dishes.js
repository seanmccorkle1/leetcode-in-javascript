var maxSatisfaction = function(s) {
    
    s.sort((a,b)=> a - b)
    
    let result = 0
    let len = s.length
    
    for (let i = 0; i < len; i++) {
        
        let current = 0
        
        for (let j = i; j < len; j++) {
            current += (s[j] * (j - i + 1))
        }
        
        if (current > result) {
            result = current
        }
    }
    return result
}


var countTriples = function(n) {
    
    let count = 0

    for (let a = 1; a <= n; a++) {
        
        for (let b = 1; b <= n; b++) {
            
            let c = ~~Math.sqrt(a * a + b * b)
            
            if (a * a + b * b === c * c) {
                
                if (c <= n) {
                    count++;
                }
                
            }
        }
    }

    return count;
};

var knightProbability = function(N, K, r, c) {
    

    const dirs = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    const memo = new Map();
    
    return findProbs(K, r, c);
    
    function findProbs(k, r, c) {
        
        const key = `${k}#${r}#${c}`;
        
        // base case
        if (isOutOfBound(r, c)) return 0.0; // .0 is for completeness sake. Don't really need it in JavaScript
        if (k === 0) return 1.0;
        if (memo.has(key)) return memo.get(key);
        
        let prob = 0;
        
        for (const [dirX, dirY] of dirs) {
            let n = findProbs(k - 1, r + dirX, c + dirY)
            prob += 1/8 * n
        }
        
        memo.set(key, prob);
        
        return prob
    }
    
    function isOutOfBound(row, col) {
        return row < 0 || col < 0 || row >= N || col >= N;
    }
};
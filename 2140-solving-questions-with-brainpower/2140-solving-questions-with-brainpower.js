
var mostPoints = function(questions) {
    let totalQuestions = questions.length;
	
	let dp = new Array(totalQuestions).fill(0);
    
    for(let i = totalQuestions - 1; i >= 0; i--) {
        let point = questions[i][0];
        let power = questions[i][1];
        
        let solve = point + (dp[i + power + 1] ?? 0)
        let skip = (dp[i + 1] || 0);
        
        dp[i] = Math.max(solve, skip);
    }
    
    return dp[0];
}

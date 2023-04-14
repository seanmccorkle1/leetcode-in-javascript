var longestPalindromeSubseq = function(string) {
    
    // Get the length of the input string
    

    // Initialize a 2D array to store the length of the longest palindromic subsequence
    
    const dp = new Array(string.length).fill().map((e) => new Array(string.length).fill(0))
    
      // Iterate over the substrings in reverse order to fill in the dp table bottom-up

    for (let index = string.length - 1; index >= 0; index--) {
        // Base case: the longest palindromic subsequence of a single character is 1
        
        dp[index][index] = 1
        dp

        for (let j = index+1; j < string.length; j++) {
            
            // If the two characters match, the longest palindromic subsequence can be extended by two
    
            if (string[index] == string[j]) {
                dp[index][j] = 2 + dp[index+1][j-1]
            } 
            
            // Otherwise, we take the maximum of the two possible substrings
            
            else {
                dp[index][j] = Math.max(dp[index+1][j], dp[index][j-1])
            }
        }
    }
    
    // The length of the longest palindromic subsequence 
    // is in the top-right corner of the dp table
    
    dp
    return dp[0][string.length-1]
}
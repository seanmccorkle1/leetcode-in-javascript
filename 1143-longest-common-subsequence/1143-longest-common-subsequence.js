var longestCommonSubsequence = function(text1, text2) {
    
    // padding one space for empty string representation
    text1 = ' ' + text1;
    text2 = ' ' + text2;
    
    let [w, h] = [text1.length, text2.length];
    
    let dp = Array(h).fill(0).map( ()=> new Array(w).fill(0)  );
    
    // update dynamic programming table with optimal substructure
    for( let y = 1; y < h ; y++){
        for( let x = 1; x < w; x++){
            
            if( text1[x] == text2[y] ){
                
                // with the same character
                // extend the length of common subsequence
                dp[y][x] = dp[y-1][x-1] + 1;
                
            }else{
                
                // with different characters
                // choose the optimal subsequence
                dp[y][x] = Math.max( dp[y-1][x], dp[y][x-1]);
            }
        }
    }

    return dp[h-1][w-1];
};

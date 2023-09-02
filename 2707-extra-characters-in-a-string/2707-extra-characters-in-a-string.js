var minExtraChar = function(s, dictionary) {

    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;

        for (const word of dictionary) {
            if (i >= word.length && s.slice(i - word.length, i) === word) {
                dp[i] = Math.min(dp[i], dp[i - word.length]);
            }
        }
    }

    return dp[n];
};


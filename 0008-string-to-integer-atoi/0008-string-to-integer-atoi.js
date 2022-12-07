var myAtoi = function(stringnum) {
    return Math.max(
        Math.min(parseInt(stringnum) || 0, 2147483647),
        -2147483648)
}
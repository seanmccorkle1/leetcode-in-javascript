/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(string) {
    return string.split(" ").filter(Boolean).reverse().join(" ")
};
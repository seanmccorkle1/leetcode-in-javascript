/**
 * @param {string} string
 * @return {boolean}
 */


var isPalindrome = function (string) {

    const fixedString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    const reverseString = fixedString.split("").reverse().join("")
    
    if (fixedString == reverseString){
        return true
    }

    return false
}

console.log(isPalindrome("racecar ___   "), true)
console.log(isPalindrome("newstring"), false, "not a palindrome")

// console.log(isPalindrome("   "), true, "make it an empty string")
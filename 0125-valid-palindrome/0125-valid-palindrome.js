/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function (string) {

    let fixed = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    let reverse = fixed.split("").reverse().join("")
    
    if (fixed==reverse){
        return true
    }
    return false
        
        // return string.toLowerCase().replace(/[^a-z0-9]+/g, "") === string.toLowerCase().replace(/[^a-z0-9]+/g, "").split("").reverse().join("")
}

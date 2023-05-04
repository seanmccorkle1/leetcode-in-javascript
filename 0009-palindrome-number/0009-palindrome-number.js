var isPalindrome = function(number){
    
    if (number <= -1) {
        return false
    }
    
    let reverseNumber = number.toString().split("").reverse().join("")
    
    if (number == reverseNumber){
        return true
    }
    
    else if (number != reverseNumber) {
        return false
    }
}

console.log(isPalindrome(121), true)
console.log(isPalindrome(122), false)
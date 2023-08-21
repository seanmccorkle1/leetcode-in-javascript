var repeatedSubstringPattern = function(string) {
    
    let doubleString = string.repeat(2)
    doubleString = doubleString.slice(1,-1)
    
    string
    doubleString
    
    return doubleString.includes(string) ? true: false
}

console.log(repeatedSubstringPattern("leetleet"), true)

// console.log(repeatedSubstringPattern("LeetaLeet"), true)
// console.log(repeatedSubstringPattern("leetASD"), false)
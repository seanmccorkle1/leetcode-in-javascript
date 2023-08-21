

var repeatedSubstringPattern = function(string) {
    
    let doubleString = string.repeat(2)
    doubleString = doubleString.slice(1,-1)
    
    return doubleString.includes(string) ? true: false
}
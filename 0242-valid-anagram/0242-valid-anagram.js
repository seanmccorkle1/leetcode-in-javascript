/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(string1, string2) {
    
    let anagram1=string1.split("").sort().join("")
    let anagram2=string2.split("").sort().join("")
    
    return anagram1===anagram2
    
}
console.log(isAnagram("anagram", "nagaram"))
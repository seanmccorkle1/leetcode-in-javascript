/**
 * @param {number} n
 * @return {number}
 */

var countVowelStrings = function(num) {
    
    let aCount=1
    let eCount=1
    let iCount=1
    let oCount=1
    let uCount=1
    
    // dont do on num=1
    // this is O(N), theres no nested loop or anything
    
    while (num >= 2){
        aCount += eCount +iCount + oCount + uCount
        eCount += iCount + oCount +uCount
        iCount += oCount + uCount
        oCount += uCount

        num -=1
    }    
    
    return aCount  +eCount+iCount + oCount+uCount
    
}

console.log(countVowelStrings(1),  5, ["a","e","i","o","u"], "array length is 5")

// console.log(countVowelStrings(2), 15, ["aa", "ae", "ai", "ao", "au", "ee", "ei", "eo", "eu", "ii", "io", "iu", "oo", "ou", "uu"], " `u` can never come first except in `uu` because it has to be lexicographically sorted ")
// console.log(countVowelStrings(3), 35)
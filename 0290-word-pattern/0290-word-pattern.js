/**
 * 
 * Given an array of strings, and an integer k, return the kth distinct string in the array. 
 * If there are fewer than k distinct strings, return an empty string "".
 *
 * @param summaryRanges([0, 1, 2, 4, 5, 7])
 * @return  ["0->2", "4->5", "7"]
 * @explain
 */


var wordPattern = function(pattern, string) {

    const wordArray = string.split(/\s+/)
    const map = new Map()

    pattern
    wordArray 

    if (wordArray.length != pattern.length) {
        return false
    }
    const uniqueWords = new Set(wordArray)
    const uniqueLetters = new Set(pattern)

    if (uniqueWords.size != uniqueLetters.size){
        return false
    }
        
    for (let index = 0; index < pattern.length; index++) {
        if (map.has(pattern[index]) &&  map.get(pattern[index]) !== wordArray[index]) {
            return false
        }
        map.set(pattern[index], wordArray[index])
    }

    return true
}

console.log(wordPattern("abba", "dog cat cat dog"), true)
// console.log(wordPattern("abba", "dog cat cat rocketship"), false)

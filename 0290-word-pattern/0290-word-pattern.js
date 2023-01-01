/**
 * 
 * Given an array of strings, and an integer k, return the kth distinct string in the array. 
 * If there are fewer than k distinct strings, return an empty string "".
 *
 * @param summaryRanges([0, 1, 2, 4, 5, 7])
 * @return  ["0->2", "4->5", "7"]
 * @explain
 */



var wordPattern = function (patternLetters, string) {
    
    patternLetters = patternLetters.toUpperCase()
    
    const map = new Map()
    let wordArray = string.split(" ")

    patternLetters
    wordArray

    // one word must correspond to one letter

    if (wordArray.length != patternLetters.length) {
        return false
    }

    const uniqueWords = new Set(wordArray)
    const uniqueLetters = new Set(patternLetters)

    if (uniqueWords.size != uniqueLetters.size) {
        return false
    }



    for (let index = 0; index < patternLetters.length; index++) {

        let patternLetter = patternLetters[index]

        let currWord = wordArray[index]
        let matchingWord = map.get(patternLetter)


        const wordsMatch = (currWord == matchingWord)

        // const noPattern = map.has(patternLetter && !wordsMatch)

        patternLetter


        if (map.has(patternLetter) && !wordsMatch){
            return false
        }

        // if condition comes first
        // updating the object comses last

        // no duplicate keys can exist in a map or obj

        patternLetter
        currWord

        map.set(patternLetter, currWord)
    }

    map

    return true
}

console.log(wordPattern("abba", "dog cat cat dog"), true)
// console.log(wordPattern("abba", "dog cat cat rocketship"), false)
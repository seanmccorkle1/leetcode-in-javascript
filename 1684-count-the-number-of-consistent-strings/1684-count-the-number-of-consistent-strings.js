/**
 * 
 * Given an array of strings, and an integer k, return the kth distinct string in the array. 
 * If there are fewer than k distinct strings, return an empty string "".
 *
 * @param summaryRanges([0, 1, 2, 4, 5, 7])
 * @return  ["0->2", "4->5", "7"]
 * @explain
 */

var countConsistentStrings = function(allowedLetters, wordArray) {
    
    let count=0

    const regexString = `[${allowedLetters}]`
    const allowedRegex = new RegExp(regexString, "g")
    
    
    // `${allowedLetters}`
    // const r=/`${allowedLetters}]/g

    for (let word of wordArray){

        word = word.replace(allowedRegex, "")
        word

        const wordAllowed = (word == "")

        
        if (wordAllowed){
            count++
        }

        word
    }
    return count
}

countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])
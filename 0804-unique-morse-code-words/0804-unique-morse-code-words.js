
var uniqueMorseRepresentations = function (wordArray) {
    const morseArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    for (let index=0; index< wordArray.length; index++) {
        
        wordArray[index] = wordArray[index].replace(/[^]/g, letter => morseArray[letter.charCodeAt() - 97])
    }
        
    return new Set(wordArray).size
}

uniqueMorseRepresentations(["gin","zen","gig","msg"]) // 2
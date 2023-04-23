const mergeAlternately = (word1, word2) => {

    let currString = ""
    let index = 0

    while  (index < Math.min(word1.length,word2.length)) {

        // for (var index = 0; index < Math.min(word1.length, word2.length); index++) {

        let word1Letter =word1[index] 
        let word2Letter = word2[index]

        currString += word1Letter + word2Letter
        index++
    }

    let remainingLetters =""

    if (word1.length > word2.length){
        remainingLetters = word1.slice(index)

    }

    else if (word2.length > word1.length){
        remainingLetters = word2.slice(index)
    }

    return currString + remainingLetters
}

// console.log(mergeAlternately("leet", "code"), "lceoedte")
console.log(mergeAlternately("leet", "co"), "lceoet")
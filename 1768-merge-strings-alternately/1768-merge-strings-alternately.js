const mergeAlternately = (word1, word2) => {

    let currString = ""

    for (let index = 0; index < Math.max(word1.length, word2.length); index++) {

        let word1Letter =word1[index] ?? ""
        let word2Letter = word2[index]?? ""

        currString += (word1Letter + word2Letter)

    }

    return currString
}

console.log(mergeAlternately("leet", "code"), "lceoedte")
// console.log(mergeAlternately("leet", "co"), "lceoet")
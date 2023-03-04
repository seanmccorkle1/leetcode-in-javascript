// Next capital one questions:

// * Coin Change	35.5%	Medium	1.08	https://leetcode.com/problems/coin-change
// * Add Two Numbers	33.9%	Medium	1.25	https://leetcode.com/problems/add-two-numbers
// * Greatest Common Divisor of Strings	52.9%	Easy	0.12	https://leetcode.com/problems/greatest-common-divisor-of-strings


var countConsistentStrings = function (allowedLettersString, wordArray) {
    
    let consistentCount = 0

    let regexString = `[${allowedLettersString}]`
    const allowedLettersRegex=   RegExp(regexString, "g")


    for (let word of wordArray) {

        word = word.replace(allowedLettersRegex, "") 
        
        if (word == "") {
            consistentCount+=1
        }

    }

    return consistentCount
}

console.log(countConsistentStrings("ab", ["xd", "aaaaa", "aaab", "baa"]), 3)
var longestCommonPrefix = function(array) {

    // if (array.length == 0){
    //     return ""
    // }

    // as soon as it doesnt equal return it to force the prefix

    const firstWord = array[0]

    for (let index = 0; index < firstWord.length; index++){

        index

        for (const currWord of array) {

            currWord

            if (currWord[index] != firstWord[index]){
                return currWord.slice(0, index)
            }
        }
    }

    // the longest prefix is just the whole word
    return firstWord
}

// console.log(longestCommonPrefix(["flower","flow","flight"]), "fl")
// console.log(longestCommonPrefix(["flower","flow","flight", "f"]),  "f")

console.log(longestCommonPrefix(["fl","fl","fl"]), "fl")
// console.log(longestCommonPrefix(["asd","xd"]), "")

// console.log(longestCommonPrefix([]))
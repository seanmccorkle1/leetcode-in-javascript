var maximumNumberOfStringPairs = function (words) {

    let pairCount = 0

    for (let index = 0; index < words.length - 1; index++) {

        const normalWord = words[index]

        for (let j = index + 1; j < words.length; j++) {
            
            let reversedWord = words[j].split("").reverse().join("")
            
            if (normalWord == reversedWord) {
                pairCount++
                break // only need 1 pair (1 match)
            }
        }
    }
    return pairCount
}


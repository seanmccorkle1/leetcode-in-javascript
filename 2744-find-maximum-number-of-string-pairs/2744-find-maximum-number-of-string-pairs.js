var maximumNumberOfStringPairs = function (words) {

    let pairCount = 0

    for (let index = 0; index < words.length - 1; index++) {

        let normalWord = words[index]
        
        let rightIndex = index + 1
        
        while (rightIndex < words.length){

            let reversedWord = words[rightIndex].split("").reverse().join("")
            
            if (normalWord == reversedWord) {
                pairCount++
                break // only need 1 pair (1 match)
            }
            
            rightIndex++
        }    
    }
    return pairCount
}
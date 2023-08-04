var wordBreak = function(bigString, stringArray) {

    if (stringArray == undefined || stringArray.length === 0) { // "false" on if statement means "dont execute", ie skip it
        return false
    }

    // no duplicates
    const wordsSet = new Set(stringArray) // new Set(["leet", "code"])
    const indexArray = [0] // means start at endIndex 0
    let nine = bigString.length
    while (indexArray.length) { // look at the comma positions
        let startIndex = indexArray.shift() // modifies
            
            if (!wordsSet.has(startIndex)){
            wordsSet.add(startIndex)


        for (let endIndex = startIndex + 1; endIndex <= nine; endIndex++) {  // keep going until end of "catsandog"

                let slice = bigString.slice(startIndex, endIndex)


                if (wordsSet.has(slice)) { // same as array.includes

                    indexArray.push(endIndex)

                    if (endIndex === bigString.length) { // must match a word on the last letter("og" is false)
                        return true
                    } 
                } 
            } 
    }
    }
    return false
}


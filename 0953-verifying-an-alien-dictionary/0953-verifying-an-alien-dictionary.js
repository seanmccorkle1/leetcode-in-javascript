var isAlienSorted =function(stringArray, alphabet){

    const letterMap = new Map()
    
    letterMap
    
    
    for (let index = 0; index < alphabet.length; index++) {
        let letter = alphabet[index]        
        letterMap.set(letter, index)
    }
    
    stringArray 
    alphabet
    
    
    for (let index = 1; index < stringArray.length; index++){
        
        let leftWord = stringArray[index - 1]
        let rightWord = stringArray[index]

        leftWord
        rightWord
    
        // "apple".includes("app") is true
        // "app".includes("apple") is false
        
        // so the leftWord has to be the bigger word to return false


        if (leftWord.includes(rightWord) && leftWord != rightWord) { 
            return false
        }
        
        
        for (let index = 0; index < leftWord.length; index++){ 
            
            let letterA = leftWord[index]
            let letterB = rightWord[index]
            
            // if theyre both "a", go to the 2nd letter
            if (letterA == letterB){
                continue
            }
            
            
            letterA
            letterB

            let indexA = letterMap.get(letterA) 
            let indexB = letterMap.get(letterB)

            indexA 
            indexB
            
            if (indexA < indexB){ 
                break
            }
            
            else if (indexA > indexB) {
                return false 
            }
        }
    }

    return true 
}

console.log(isAlienSorted(["world","alien","beater"], "worldabcefghijkmnpqstuvxyz"), true)

// console.log(isAlienSorted(["alien","beater","cat"], "abcdefghijklmnopqrstuvwxyz"), true)
// console.log(isAlienSorted(["alien","cat","beater"], "abcdefghijklmnopqrstuvwxyz"), false)
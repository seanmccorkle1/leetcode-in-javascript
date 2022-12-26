var isAlienSorted =function(stringArray, alphabet){

    const letterMap = new Map()
    
    letterMap


    for (let index = 0; index < alphabet.length; index++){
        
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
         
    
        if (leftWord.includes(rightWord) && leftWord.length!= rightWord.length) {
            return false
        }
    
        
        for (let index = 0; index < leftWord.length; index++){ 
            
            let letterA = leftWord[index]
            let letterB = rightWord[index]
            
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

            if (indexA > indexB) {
                return false 
            }
        }
    }

    return true 
}

console.log(isAlienSorted(["world","alien","beater"], "worldabcefghijkmnpqstuvxyz"), true)

// console.log(isAlienSorted(["alien","beater","cat"], "abcdefghijklmnopqrstuvwxyz"), true)
// console.log(isAlienSorted(["alien","cat","beater"], "abcdefghijklmnopqrstuvwxyz"), false)
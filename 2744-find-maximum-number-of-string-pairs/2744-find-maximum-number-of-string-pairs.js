var maximumNumberOfStringPairs = function(words) {

    let pairCount= 0 
    
for(let i = 0; i < words.length-1; i++){
    const normalWord = words[i]
    
    for(let j = i + 1; j < words.length; j++){        
        let reversedWord = words[j].split("").reverse().join("")

        if (normalWord == reversedWord){
                pairCount++
                break // only need 1 pair (1 match)
            }
        }
    }
    return pairCount++
};
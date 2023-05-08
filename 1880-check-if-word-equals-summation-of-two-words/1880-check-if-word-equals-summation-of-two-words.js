var isSumEqual = function(firstWord, secondWord, targetWord) {
    
    const obj = {
        'a' : '0',
        "b" : '1',
        "c" : '2',
        "d" : '3',
        "e" : '4',
        'f' : '5',
        'g' : '6',
        "h" : '7',
        'i' : '8', 
        "j" : '9'
    }
    
    let first = ""
    let second = ""
    let target = ""
    
    const greaterLength= Math.max(firstWord.length, secondWord.length, targetWord.length)
    
    for (let index=0; index < greaterLength; index++) {
        
        let firstWordLetter = (firstWord[index] ?? "")
        let secondWordLetter = (secondWord[index] ?? "")
        let targetLetter = targetWord[index] ?? ""
        
        let stringDigit1 = obj[firstWordLetter] ?? ""
        let stringDigit2 = obj[secondWordLetter] ?? ""
        let targetDigit = obj[targetLetter] ?? ""
        
        first += stringDigit1
        second+= stringDigit2
        target += targetDigit
    }
    
    //     for(let char of firstWord){        
    
//         first += obj[char]
//     }
//     for(let char of secondWord){
//         second += obj[char]
//     }
    
    // for(let char of targetWord){
    //     target += obj[char]
    // }
    
    let twoWordSum = Number(first) + Number(second)
    const targetSum = Number(target)

    if (twoWordSum == targetSum){
        return true
    }
    return false
    
}

isSumEqual("acb", "cba", "cdb")
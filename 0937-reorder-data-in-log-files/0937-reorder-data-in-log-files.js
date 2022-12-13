
var reorderLogFiles = function(array){

    let digitLogs=[]
    let letterLogs=[]
    
    
    // this will be called multiple times
    // so make it a function
    
    const returnBody = string => {

        let indexOfBody = string.indexOf(" ") + 1    
        let bodySlice = string.slice(indexOfBody)
        return bodySlice
    }
    
    const sortLetterLogs = (stringA, stringB) => {
        
        let bodyA = returnBody(stringA)
        let bodyB = returnBody(stringB)

        // compare from the start(identifier)

        if (bodyA === bodyB){
            let identifierCompareNum =  stringA.localeCompare(stringB)
            return identifierCompareNum
        }
        
        // ascending
        else {
            return bodyA.localeCompare(bodyB)
        }
        
        
    }

        
    for (const originalString of array) {
        
        let body= returnBody(originalString)
        const bodyContainsDigit = body.match(/[\d]/)
        
        if (bodyContainsDigit) {
            digitLogs.push(originalString)
        }
    
        else if (!bodyContainsDigit){
            letterLogs.push(originalString)
        }
    
    }
    
    letterLogs.sort(sortLetterLogs)
    
    // dont mess with digit logs
    return [...letterLogs, ...digitLogs]
}    

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","a3 art can"]), 
[ 'a3 art can', 'let1 art can', 'let2 own kit dig', 'dig1 8 1 5 1', 'dig2 3 6' ])
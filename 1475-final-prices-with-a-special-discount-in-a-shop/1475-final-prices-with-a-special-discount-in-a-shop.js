/**
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function(array) {
    
    let returnArray=[]
    
    // need to use array.find() to find the closest
    // shift() is needed with find()
    
    
    // while with .shift() to prevent cutting early
    
    while (array.length >= 1){
        let originalNum = array[0]
        array.shift()
        
        const lowerNumExists = array.find(num => num <= originalNum)

        let lowerNum = lowerNumExists
        
        let difference = originalNum - lowerNum
        
        if (lowerNumExists){
            returnArray.push(difference)
        }
        
        // still have to push something
        else if (!lowerNumExists){
            returnArray.push(originalNum)
        } 
    }
    
    return returnArray
}
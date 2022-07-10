/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(stringArray) {
    
    
    if(!stringArray.length){
        return ""
    }
    
    for (let index=0;index<stringArray[0].length;index++){    
        let letter = stringArray[0][index]
        
        for (const word of stringArray ){
            if (letter !== word[index]){
                return stringArray[0].slice(0,index)
            }
        }     
    }
    
    return stringArray[0]
}
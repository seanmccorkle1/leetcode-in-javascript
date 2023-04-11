var groupAnagrams = function(stringArray){

    // take a normal array and return a double array = use an object
    const object = {}
    
    for (let originalString of stringArray){
        
        let anagramString = originalString.split("").sort().join("")
        const anagramArray = object[anagramString]
    
        object        
        
        if (!anagramArray) { 
            object[anagramString] = [originalString] // so you can push into the array
        }
        
        else {
            anagramArray.push(originalString)
        }        
        
        object
    }
    return Object.values(object)
}
var groupAnagrams = function(stringArray){

    // take a normal array and return a double array = use an object
    const object = {}
    
    for (let normalString of stringArray){
        
        let anagramString = normalString.split("").sort().join("")
        const anagramArray = object[anagramString]
        
        object        
        
        if (!anagramArray) { 
            object[anagramString] = [normalString] // so you can push into the array
        }
        
        else {
            anagramArray.push(normalString)
        }        
        
        object
    }
    
    const doubleArray = Object.values(object)
    
    // use .sort() for alphabetical order, dont use a and b
    // sort it on a lower level with map, otherwise it only compares the first string of each array
    
    // ["bat"] is a, ["nat", "tan"] is b
    // a and b represent the elements
    
    return doubleArray.map(subarray => subarray.sort()).sort((a,b) => a.length - b.length)
}

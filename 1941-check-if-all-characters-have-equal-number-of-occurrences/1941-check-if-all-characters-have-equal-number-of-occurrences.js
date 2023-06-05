var areOccurrencesEqual = function(s) {
    
    let array=s.split("").sort().join("").match(/([^])(\1+)?/g).map(string => string.length)
    
    const set=new Set (array)
    
    if (set.size == 1){
        return true
    }
    
    return false
    
    // .every((string, index, array) => string.length == array[index + 1].length)
}
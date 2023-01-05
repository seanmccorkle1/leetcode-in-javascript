var uniqueOccurrences = function(array) {

    const obj = {}

    
    for(let element of array) {
        (obj[element]) ? obj[element] += 1 
        : obj[element] = 1
    }
    
    const uniqueFrequenciesArray = [...new Set(Object.values(obj))]

    if (Object.values(obj).join("") == uniqueFrequenciesArray.join("")) {
        return true
    }

    return false
}

console.log(uniqueOccurrences([1,2,2,1,1,3]), true, "all frequencies are unique")

// console.log(uniqueOccurrences(["a", "b", "c", "c"]), false, "a and b have the same frequency of 1")
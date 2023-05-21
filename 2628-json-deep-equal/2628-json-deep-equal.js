var areDeeplyEqual = function(o1, o2) {
    // All equal values and same objects are eliminated
    if (o1 === o2) return true;
    
    // If any of o1 or o2 is not an object, they are different values
    if (typeof o1 != 'object' || typeof o2 != 'object') return false;

    // Both of them should be objects or arrays
    
    const arraysDontMatch = Array.isArray(o1) !== Array.isArray(o2)
    
    if (arraysDontMatch) {
        return false
    }
    
    // Both should have same keys, in case of indexes this will return indexes
    
    const lengthsDontMatch = Object.entries(o1).length != Object.entries(o2).length
    
    if (lengthsDontMatch){
        return  false
    }
    // if (Object.keys(o1).length != Object.keys(o2).length) {
    //     return false
    // }
    
    // Check if all values against keys of o1 and o2 are deeply equal.
    // If number of keys are same, then at a different key in objects would mean at least
    // 1 value against the key of o2 will be undefined

    for (const key in o1) {
        
        const keysArentEqual = !areDeeplyEqual(o1[key], o2[key])
        
        if (keysArentEqual) {
            return false
        }
    }
    
    // All false checks passed
    return true
}